import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeService } from '../shared/services/stripe.service';
import { Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { Store } from '@ngrx/store';
import { fromLanding } from '../shared/store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { BooksModel } from '../app.model';
import { LandingActions } from '../shared/store/actions';

@Component({
  selector: 'app-book-purchase-dialog',
  templateUrl: './book-purchase-dialog.component.html',
  styleUrls: ['./book-purchase-dialog.component.css'],
  standalone: false,
})
export class BookPurchaseDialogComponent implements OnInit, AfterViewInit {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  public selectBook$ = this.store.select(fromLanding.selectBook);
  public selectIsPaid$ = this.store.select(fromLanding.selectIsPaid);

  faLock = faLock;
  faChevronRight = faChevronRight;

  purchaseForm!: FormGroup;
  checkoutForm!: FormGroup;

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
    private store: Store
  ) {}

  ngOnInit(): void {
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
    this.isLoadingCheckout = true;
    if (!this.stripe || !this.card) {
      return;
    }

    const { token, error } = await this.stripe.createToken(this.card);

    if (this.purchaseForm.valid) {
      if (error) {
        this.isLoadingCheckout = false;
        this.isStripeError = true;
        this.stripeErrorMessage = error.message || '';
      } else {
        this.isLoadingCheckout = true;
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
    this.store.dispatch(LandingActions.resetPurchase());
    this.closeDialog();
  }
}
