import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LANDING_FEATURE_KEY } from '../states/landing.state';
import { LandingState } from '../../../app.model';

export const selectLandingState =
  createFeatureSelector<LandingState>(LANDING_FEATURE_KEY);

export const selecIsloading = createSelector(
  selectLandingState,
  (state: LandingState) => state.isLoading
);

export const selectBooks = createSelector(
  selectLandingState,
  (state: LandingState) => state.books
);

export const selectBook = createSelector(
  selectLandingState,
  (state: LandingState) => state.book
);

export const selectIsPaid = createSelector(
  selectLandingState,
  (state: LandingState) => state.isPaid
);

export const selectAdmin = createSelector(
  selectLandingState,
  (state: LandingState) => state.admin
);

export const selectPurchases = createSelector(
  selectLandingState,
  (state: LandingState) => state.purchases
);
