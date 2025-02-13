import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faPencilAlt,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { fromLanding } from '../../shared/store/selectors';
import { CopounModel } from '../../app.model';
import { LandingActions } from '../../shared/store/actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.css'],
  standalone: false,
})
export class CouponManagementComponent implements OnInit {
  public selectCoupons$ = this.store.select(fromLanding.selectCoupons);

  display: boolean = false;
  currentStep: number = 1;
  coupons: CopounModel[] = []; // Replace with actual coupon model
  couponForm: FormGroup;
  editingCoupon: any = null;
  deletingCoupon: any = null;

  faPencilAlt = faPencilAlt;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;

  private unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.couponForm = this.fb.group({
      value: ['', Validators.required],
      discount: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      expiration_date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(LandingActions.selectCopouns());
    this.selectCoupons$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((coupons) => {
        this.coupons = coupons;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
    this.currentStep = 1;
    this.editingCoupon = null;
    this.deletingCoupon = null;
    this.couponForm.reset();
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  editCoupon(coupon: any) {
    this.editingCoupon = coupon;
    this.couponForm.patchValue(coupon);
    this.currentStep = 2;
  }

  confirmDeleteCoupon(coupon: any) {
    this.deletingCoupon = coupon;
    this.currentStep = 3;
  }

  deleteCoupon() {
    // Implement delete logic here
    this.store.dispatch(
      LandingActions.deleteCopoun({
        id_books_coupons: this.deletingCoupon.id_books_coupons,
      })
    );
    this.currentStep = 1;
  }

  onSubmit() {
    if (this.couponForm.valid) {
      if (this.editingCoupon) {
        // Update existing coupon
        this.store.dispatch(
          LandingActions.updateCopoun({
            id_books_coupons: this.editingCoupon.id_books_coupons,
            id_books: 1,
            value: this.couponForm.get('value')?.value,
            discount: this.couponForm.get('discount')?.value,
            expiration_date: this.couponForm.get('expiration_date')?.value,
          })
        );
      } else {
        this.store.dispatch(
          LandingActions.insertCoupon({
            id_books: 1,
            value: this.couponForm.get('value')?.value,
            discount: this.couponForm.get('discount')?.value,
            expiration_date: this.couponForm.get('expiration_date')?.value,
          })
        );
      }
      this.previousStep();
      this.couponForm.reset();
    }

    this.couponForm.markAllAsTouched();
  }

  onDialogHide() {
    this.closeDialog();
  }

  convertToUppercase(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.couponForm.get('value')?.setValue(input.value);
  }
}
