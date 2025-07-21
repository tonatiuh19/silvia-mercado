import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private stripePromiseTest: Promise<Stripe | null>;
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    this.stripePromiseTest = loadStripe(
      'pk_test_51NO85CLKzoJjDTKG7Fy5D4S556u87XBrj6jVojLsdDyBkjMUaC3GOz0EBPILXJ53yCPHIX1izxWD5Tt6BB32j93e00BGj3UQRm'
    );

    this.stripePromise = loadStripe(
      'pk_live_51NO85CLKzoJjDTKGj9Bp1A8K6qzrVYoZFkgmiLyThh6fQGV5cDOQiLohSUGt1KJNJDS1n9Cnmy5mD8aS8rmoJ83n00rfYetwap'
    );
  }

  async getStripe(isTesting: boolean) {
    return (await isTesting) ? this.stripePromiseTest : this.stripePromise;
  }
}
