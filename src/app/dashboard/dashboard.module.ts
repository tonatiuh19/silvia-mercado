import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchasesViewModule } from './purchases-view/purchases-view.module';
import { UpdatePriceModalModule } from './update-price-modal/update-price-modal.module';
import { CouponManagementModule } from './coupon-management/coupon-management.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PurchasesViewModule,
    UpdatePriceModalModule,
    CouponManagementModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
