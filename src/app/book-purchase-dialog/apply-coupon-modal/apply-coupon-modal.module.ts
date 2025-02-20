import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyCouponModalComponent } from './apply-coupon-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Dialog, DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ApplyCouponModalComponent],
  imports: [CommonModule, ReactiveFormsModule, DialogModule],
  exports: [ApplyCouponModalComponent],
})
export class ApplyCouponModalModule {}
