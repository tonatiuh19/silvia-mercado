import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.component.html',
  styleUrls: ['./payment-failure.component.css'],
  standalone: false,
})
export class PaymentFailureComponent {
  @Output() retryEvent = new EventEmitter<void>();

  retry() {
    this.retryEvent.emit();
  }
}
