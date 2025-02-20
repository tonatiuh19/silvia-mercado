import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BookPurchaseDialogComponent } from './book-purchase-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PaymentSuccessModule } from './payment-success/payment-success.module';
import { PaymentFailureModule } from './payment-failure/payment-failure.module';
import { ApplyCouponModalModule } from './apply-coupon-modal/apply-coupon-modal.module';

@NgModule({
  declarations: [BookPurchaseDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    PaymentSuccessModule,
    PaymentFailureModule,
    ApplyCouponModalModule,
  ],
  exports: [BookPurchaseDialogComponent],
})
export class BookPurchaseDialogModule {}
