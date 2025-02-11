import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  standalone: false,
})
export class PaymentSuccessComponent {
  @Output() backEvent = new EventEmitter<void>();

  goBack() {
    this.backEvent.emit();
  }
}
