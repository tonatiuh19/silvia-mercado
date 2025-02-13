import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchasesViewModule } from './purchases-view/purchases-view.module';
import { UpdatePriceModalModule } from './update-price-modal/update-price-modal.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PurchasesViewModule,
    UpdatePriceModalModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
