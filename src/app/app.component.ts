import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fromLanding } from './shared/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  public isLoading$ = this.store.select(fromLanding.selecIsloading);
  private unsubscribe$ = new Subject<void>();
  title = 'silvia-mercado';

  isLoading = false;

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isLoading$.pipe(takeUntil(this.unsubscribe$)).subscribe((loading) => {
      this.isLoading = loading ?? false;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
