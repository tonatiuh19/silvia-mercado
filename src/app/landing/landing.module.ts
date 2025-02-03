import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '../shared/footer/footer.module';
import { BookPurchaseDialogModule } from './book-purchase-dialog/book-purchase-dialog.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, FooterModule, BookPurchaseDialogModule],
  exports: [LandingComponent],
})
export class LandingModule {}
