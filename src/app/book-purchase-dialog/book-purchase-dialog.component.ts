import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeService } from '../shared/services/stripe.service';
import { Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-book-purchase-dialog',
  templateUrl: './book-purchase-dialog.component.html',
  styleUrls: ['./book-purchase-dialog.component.css'],
  standalone: false,
})
export class BookPurchaseDialogComponent implements OnInit, AfterViewInit {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  faLock = faLock;
  faChevronRight = faChevronRight;

  purchaseForm!: FormGroup;
  checkoutForm!: FormGroup;

  public isStripeError = false;
  public isLoadingCheckout = false;
  public stripeErrorMessage = '';

  public isNameEmailFormValid = false;

  private stripe: Stripe | null = null;
  private elements: StripeElements | null = null;
  private card: StripeCardElement | null = null;

  private isTesting = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({});
    this.purchaseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit(): void {
    this.setupStripe();
  }

  async setupStripe() {
    const style = {
      base: {
        color: '#ffffff',
        fontSmoothing: 'antialiased',
        fontSize: '18px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#dc3545',
        iconColor: '#dc3545',
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
      }
    } else {
      this.isLoadingCheckout = false;
      this.purchaseForm.markAllAsTouched();
    }
  }

  closeDialog() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
