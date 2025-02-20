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

  sendCodeEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.sendCodeEmail),
      switchMap(({ email }) => {
        return this.landingService.sendCodeEmail(email).pipe(
          map((response) => {
            return LandingActions.sendCodeEmailSuccess({
              admin: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.sendCodeEmailFailure({ error }));
          })
        );
      })
    );
  });

  validateSessionCode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.validateSessionCode),
      switchMap(({ code, email }) => {
        return this.landingService.validateSessionCode(code, email).pipe(
          map((response) => {
            return LandingActions.validateSessionCodeSuccess({
              admin: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.validateSessionCodeFailure({ error }));
          })
        );
      })
    );
  });

  getPurchases$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.getPurchases),
      switchMap(({}) => {
        return this.landingService.getPurchases().pipe(
          map((response) => {
            return LandingActions.getPurchasesSuccess({
              purchases: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.getPurchasesFailure({ error }));
          })
        );
      })
    );
  });

  updatePriceBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.updatePriceBook),
      withLatestFrom(this.store.select(fromLanding.selectBook)),
      switchMap(([{ price }, book]) => {
        return this.landingService.updatePriceBook(book.id_books, price).pipe(
          map((response) => {
            return LandingActions.updatePriceBookSuccess({
              book: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.updatePriceBookFailure({ error }));
          })
        );
      })
    );
  });

  selectCoupons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.selectCopouns),
      switchMap(({}) => {
        return this.landingService.getCoupons().pipe(
          map((response) => {
            return LandingActions.selectCopounsSuccess({
              coupons: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.selectCopounsFailure({ error }));
          })
        );
      })
    );
  });

  insertCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.insertCoupon),
      switchMap(({ id_books, value, discount, expiration_date }) => {
        return this.landingService
          .insertCoupon(id_books, value, discount, expiration_date)
          .pipe(
            map((response) => {
              return LandingActions.insertCouponSuccess({
                coupons: response,
              });
            }),
            catchError((error) => {
              return of(LandingActions.insertCouponFailure({ error }));
            })
          );
      })
    );
  });

  updateCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.updateCopoun),
      switchMap(
        ({ id_books_coupons, id_books, value, discount, expiration_date }) => {
          return this.landingService
            .updateCoupon(
              id_books_coupons,
              id_books,
              value,
              discount,
              expiration_date
            )
            .pipe(
              map((response) => {
                return LandingActions.updateCopounSuccess({
                  coupons: response,
                });
              }),
              catchError((error) => {
                return of(LandingActions.updateCopounFailure({ error }));
              })
            );
        }
      )
    );
  });

  deleteCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.deleteCopoun),
      switchMap(({ id_books_coupons }) => {
        return this.landingService.deleteCoupon(id_books_coupons).pipe(
          map((response) => {
            return LandingActions.deleteCopounSuccess({
              coupons: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.deleteCopounFailure({ error }));
          })
        );
      })
    );
  });

  validateCouponSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LandingActions.validateCoupon),
      switchMap(({ coupon }) => {
        return this.landingService.validateCoupon(coupon).pipe(
          map((response) => {
            return LandingActions.validateCouponSuccess({
              individualCoupon: response,
            });
          }),
          catchError((error) => {
            return of(LandingActions.validateCouponFailure({ error }));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private landingService: LandingService
  ) {}
}
