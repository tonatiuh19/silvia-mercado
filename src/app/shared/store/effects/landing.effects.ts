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

  constructor(
    private actions$: Actions,
    private store: Store,
    private landingService: LandingService
  ) {}
}
