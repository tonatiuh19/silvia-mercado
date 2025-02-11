import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFailureComponent } from './payment-failure.component';

@NgModule({
  declarations: [PaymentFailureComponent],
  imports: [CommonModule],
  exports: [PaymentFailureComponent],
})
export class PaymentFailureModule {}
