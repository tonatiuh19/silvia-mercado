import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSuccessComponent } from './payment-success.component';

@NgModule({
  declarations: [PaymentSuccessComponent],
  imports: [CommonModule],
  exports: [PaymentSuccessComponent],
})
export class PaymentSuccessModule {}
