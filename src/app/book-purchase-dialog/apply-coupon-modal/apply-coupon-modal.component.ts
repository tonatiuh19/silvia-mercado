import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-coupon-modal',
  templateUrl: './apply-coupon-modal.component.html',
  styleUrls: ['./apply-coupon-modal.component.css'],
  standalone: false,
})
export class ApplyCouponModalComponent {
  @Output() couponApplied = new EventEmitter<string>();
  display: boolean = false;
  couponForm: FormGroup;
  isValidCoupon: boolean = false;

  constructor(private fb: FormBuilder) {
    this.couponForm = this.fb.group({
      couponCode: ['', Validators.required],
    });
  }

  openModal() {
    this.display = true;
  }

  closeModal() {
    this.display = false;
  }

  applyCoupon() {
    if (this.couponForm.valid) {
      const couponCode = this.couponForm.get('couponCode')?.value;
      this.couponApplied.emit(couponCode);
      //this.closeModal();
    }
  }

  onDialogHide() {
    this.closeModal();
  }

  convertToUppercase(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.couponForm.get('couponCode')?.setValue(input.value);
  }

  resetForm() {
    this.couponForm.reset();
    this.isValidCoupon = false;
  }

  setInvalidCoupon() {
    this.isValidCoupon = true;
  }
}
