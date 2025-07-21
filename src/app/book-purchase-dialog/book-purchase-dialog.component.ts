import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faLock,
  faChevronRight,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeService } from '../shared/services/stripe.service';
import { Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { Store } from '@ngrx/store';
import { fromLanding } from '../shared/store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { BooksModel, CopounModel, CouponValidationModel } from '../app.model';
import { LandingActions } from '../shared/store/actions';
import { ApplyCouponModalComponent } from './apply-coupon-modal/apply-coupon-modal.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-purchase-dialog',
  templateUrl: './book-purchase-dialog.component.html',
  styleUrls: ['./book-purchase-dialog.component.css'],
  standalone: false,
})
export class BookPurchaseDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(ApplyCouponModalComponent)
  applyCouponModalComponent!: ApplyCouponModalComponent;

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  showApplyCouponModal: boolean = false;

  isMobile: boolean = window.innerWidth <= 950;

  public selectBook$ = this.store.select(fromLanding.selectBook);
  public selectIsPaid$ = this.store.select(fromLanding.selectIsPaid);
  public selectIndividualCoupon$ = this.store.select(
    fromLanding.selectIndividualCoupon
  );

  faLock = faLock;
  faChevronRight = faChevronRight;
  faSpinner = faSpinner;

  purchaseForm!: FormGroup;
  checkoutForm!: FormGroup;

  couponCode: CouponValidationModel = {
    id_books_coupons: 0,
    discount: 0,
  };

  bookPrice = 0;

  public isStripeError = false;
  public isLoadingCheckout = false;
  public stripeErrorMessage = '';

  public isNameEmailFormValid = false;

  public book: BooksModel = {
    id_books: 0,
    title: '',
    price: 0,
  };

  private stripe: Stripe | null = null;
  private elements: StripeElements | null = null;
  private card: StripeCardElement | null = null;

  private isTesting = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private store: Store,
    private titleService: Title,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.isMobileView();
    this.titleService.setTitle('Silvia Mercado: Finanzas Felices');

    this.checkoutForm = this.fb.group({});
    this.purchaseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //recaptcha: ['', Validators.required],
    });

    this.store.dispatch(
      LandingActions.getBookById({
        id_books: 1,
      })
    );
    this.selectBook$.pipe(takeUntil(this.unsubscribe$)).subscribe((book) => {
      this.book = book;
      this.bookPrice = book.price;
    });
    this.selectIndividualCoupon$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((coupon) => {
        if (coupon && typeof coupon !== 'boolean') {
          this.couponCode = coupon;
          this.bookPrice =
            this.bookPrice - this.bookPrice * (coupon.discount / 100);
        }
        console.log('Coupon code', this.couponCode);
      });
  }

  ngAfterViewInit(): void {
    this.setupStripe();
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'overflow-x');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async setupStripe() {
    const style = {
      base: {
        color: '#ffffff',
        fontSmoothing: 'antialiased',
        fontSize: '18px',
        fontFamily: '"Kanit Regular", sans-serif',
        '::placeholder': {
          color: '#cccccc',
        },
      },
      invalid: {
        color: '#dc3545',
        iconColor: '#dc3545',
      },
      valid: {
        color: '#ffffff',
        iconColor: '#ffffff',
      },
    };
    this.stripe = await this.stripeService.getStripe(this.isTesting);
    if (this.stripe) {
      this.elements = this.stripe.elements({
        locale: 'es', // Set the locale to Spanish
      });
      this.card = this.elements.create('card', { style });
      this.card.mount('#card-element');
    }
  }

  async handlePayment() {
    if (this.bookPrice === 0) {
      this.store.dispatch(
        LandingActions.insertPurchase({
          id_books: this.book.id_books,
          name: this.purchaseForm.get('name')?.value,
          email: this.purchaseForm.get('email')?.value,
          price: this.bookPrice.toString(),
          token: '',
          payment_type: 'stripe',
        })
      );
      return;
    }

    if (!this.stripe || !this.card) {
      return;
    }

    const { token, error } = await this.stripe.createToken(this.card);

    if (this.purchaseForm.valid) {
      this.isLoadingCheckout = true;
      if (error) {
        this.isStripeError = true;
        this.stripeErrorMessage = error.message || '';
      } else {
        this.isStripeError = false;

        console.log('Token generated', token);
        this.store.dispatch(
          LandingActions.insertPurchase({
            id_books: this.book.id_books,
            name: this.purchaseForm.get('name')?.value,
            email: this.purchaseForm.get('email')?.value,
            price: this.bookPrice.toString(),
            token: token.id,
            payment_type: 'stripe',
          })
        );
      }
    } else {
      this.isLoadingCheckout = false;
      this.purchaseForm.markAllAsTouched();
    }
  }

  closeDialog() {
    this.display = false;
    this.displayChange.emit(this.display);
    this.router.navigate(['']);
  }

  retryPayment() {
    this.isLoadingCheckout = false;
    this.isStripeError = false;
    this.stripeErrorMessage = '';
    this.unmountStripe();
    this.setupStripe();
    this.store.dispatch(LandingActions.resetPurchase());
  }

  unmountStripe() {
    if (this.card) {
      this.card.unmount();
      this.card = null;
    }
  }

  goBack() {
    this.isLoadingCheckout = false;
    this.store.dispatch(LandingActions.resetPurchase());
    this.closeDialog();
  }

  openCouponModal() {
    this.showApplyCouponModal = true;
    console.log('Open coupon modal');
    this.applyCouponModalComponent.openModal();
  }

  closeCouponModal() {
    this.showApplyCouponModal = false;
  }

  onCouponModalHide() {
    this.closeCouponModal();
  }

  applyingCoupon(event: string) {
    console.log('Coupon code', event);
    this.store.dispatch(
      LandingActions.validateCoupon({
        coupon: event,
      })
    );
    this.applyCouponModalComponent.closeModal();
    this.applyCouponModalComponent.resetForm();
    // Your existing code
  }

  isMobileView() {
    this.isMobile = window.innerWidth <= 950;
    if (this.isMobile) {
      this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
    }
  }

  goToPrivacyTerms() {
    window.open(
      this.router.serializeUrl(
        this.router.createUrlTree(['avisodeprivacidad'])
      ),
      '_blank'
    );
  }
}
