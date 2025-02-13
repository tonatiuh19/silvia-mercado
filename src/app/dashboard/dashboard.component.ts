import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { LandingActions } from '../shared/store/actions';
import { UpdatePriceModalComponent } from './update-price-modal/update-price-modal.component';
import { fromLanding } from '../shared/store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { BooksModel } from '../app.model';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  @ViewChild(UpdatePriceModalComponent)
  updatePriceModal!: UpdatePriceModalComponent;
  @ViewChild(CouponManagementComponent)
  couponManagement!: CouponManagementComponent;

  public selectBook$ = this.store.select(fromLanding.selectBook);

  public book: BooksModel = {
    id_books: 0,
    title: '',
    price: 0,
  };

  faUser = faUser;

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(
      LandingActions.getBookById({
        id_books: 1,
      })
    );
    this.selectBook$.pipe(takeUntil(this.unsubscribe$)).subscribe((book) => {
      this.book = book;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openUpdatePriceModal() {
    this.updatePriceModal.openModal();
  }

  handlePriceUpdate(event: { bookId: number; newPrice: string }) {
    console.log('Price updated:', event);
    this.store.dispatch(
      LandingActions.updatePriceBook({
        id_books: 1,
        price: event.newPrice,
      })
    );
  }

  openCouponManagement() {
    this.couponManagement.openDialog();
  }

  logOut() {
    this.store.dispatch(LandingActions.resetAdmin());
    this.router.navigate(['']);
  }
}
