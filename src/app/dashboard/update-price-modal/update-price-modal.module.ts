import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePriceModalComponent } from './update-price-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdatePriceModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UpdatePriceModalComponent],
})
export class UpdatePriceModalModule {}
