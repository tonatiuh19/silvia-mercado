import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LandingActions } from '../actions';
import { fromLanding } from '../selectors';
import { LandingService } from '../../services/landing.service';

@Injectable()
export class LandingEffects {
  getAllBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.getBooks),
      switchMap(({}) => {
        return this.landingService.getAllBooks().pipe(
          map((response) => {
            return LandingActions.getBooksSuccess({
              books: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.getBooksFailure({ error }));
          })
        );
      })
    );
  });

  getBookById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.getBookById),
      switchMap(({ id_books }) => {
        return this.landingService.getBookById(id_books).pipe(
          map((response) => {
            return LandingActions.getBookByIdSuccess({
              book: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.getBookByIdFailure({ error }));
          })
        );
      })
    );
  });

  insertPurchase$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.insertPurchase),
      withLatestFrom(this.store.select(fromLanding.selectBook)),
      switchMap(
        ([{ id_books, name, email, price, token, payment_type }, book]) => {
          return this.landingService
            .insertPurchase(id_books, name, email, price, token, payment_type)
            .pipe(
              map((response) => {
                return LandingActions.insertPurchaseSuccess({
                  isPaid: response,
                });
              }),
              catchError((error) => {
                return of(LandingActions.insertPurchaseFailure({ error }));
              })
            );
        }
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private landingService: LandingService
  ) {}
}
