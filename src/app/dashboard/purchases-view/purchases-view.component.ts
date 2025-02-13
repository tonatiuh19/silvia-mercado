import { Component, OnInit } from '@angular/core';
import { PurchasesModel } from '../../app.model';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LandingActions } from '../../shared/store/actions';
import { fromLanding } from '../../shared/store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-purchases-view',
  standalone: false,

  templateUrl: './purchases-view.component.html',
  styleUrl: './purchases-view.component.css',
})
export class PurchasesViewComponent implements OnInit {
  public selectPurchases$ = this.store.select(fromLanding.selectPurchases);

  purchases: PurchasesModel[] = [];
  paginatedPurchases: PurchasesModel[] = [];
  totalRecords: number = 0;
  rows: number = 15;
  currentPage: number = 1;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(LandingActions.getPurchases());
    this.selectPurchases$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((purchases) => {
        this.purchases = purchases;
        this.totalRecords = this.purchases.length;
        this.updatePaginatedPurchases();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updatePaginatedPurchases() {
    const start = (this.currentPage - 1) * this.rows;
    const end = start + this.rows;
    this.paginatedPurchases = this.purchases.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPurchases();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPurchases();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }
}
