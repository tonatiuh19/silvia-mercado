import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-price-modal',
  standalone: false,

  templateUrl: './update-price-modal.component.html',
  styleUrl: './update-price-modal.component.css',
})
export class UpdatePriceModalComponent {
  @Output() priceUpdated = new EventEmitter<{
    bookId: number;
    newPrice: string;
  }>();
  display: boolean = false;
  confirmDisplay: boolean = false;
  updatePriceForm: FormGroup;
  pendingUpdate: { bookId: number; newPrice: string } | null = null;

  constructor(private fb: FormBuilder) {
    this.updatePriceForm = this.fb.group({
      newPrice: ['', Validators.required],
    });
  }

  openModal() {
    this.display = true;
  }

  closeModal() {
    this.display = false;
  }

  confirmUpdate() {
    if (this.updatePriceForm.valid) {
      this.pendingUpdate = this.updatePriceForm.value;
      this.display = false;
      this.confirmDisplay = true;
    }
  }

  closeConfirmModal() {
    this.confirmDisplay = false;
  }

  updatePrice() {
    if (this.pendingUpdate) {
      this.priceUpdated.emit(this.pendingUpdate);
      this.pendingUpdate = null;
      this.confirmDisplay = false;
    }
  }
}
