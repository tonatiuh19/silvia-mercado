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
  ],
  exports: [BookPurchaseDialogComponent],
})
export class BookPurchaseDialogModule {}
