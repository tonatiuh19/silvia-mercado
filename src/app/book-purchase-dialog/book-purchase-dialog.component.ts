import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
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

  private isTesting = true;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private store: Store,
    private titleService: Title
  ) {}

  ngOnInit(): void {
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
    });
    this.selectIndividualCoupon$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((coupon) => {
        this.couponCode = coupon;
      });
  }

  ngAfterViewInit(): void {
    this.setupStripe();
  }

  ngOnDestroy(): void {
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
            price: this.book.price.toString(),
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
    this.applyCouponModalComponent.closeModal();
    this.applyCouponModalComponent.resetForm();
    // Your existing code
  }
}
