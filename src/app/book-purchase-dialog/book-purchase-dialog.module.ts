import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BookPurchaseDialogComponent } from './book-purchase-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BookPurchaseDialogComponent],
  imports: [CommonModule, DialogModule, ButtonModule, FontAwesomeModule],
  exports: [BookPurchaseDialogComponent],
})
export class BookPurchaseDialogModule {}
