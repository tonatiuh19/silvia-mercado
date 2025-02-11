import { Action, createReducer, on } from '@ngrx/store';
import {
  initialLandingState,
  LANDING_FEATURE_KEY,
} from '../states/landing.state';
import { LandingActions } from '../actions';
import { createRehydrateReducer } from '../../utils/rehydrate-reducer';
import { LandingState, BooksModel } from '../../../app.model';

export const LandingReducer = createRehydrateReducer(
  { key: LANDING_FEATURE_KEY },
  initialLandingState,
  on(LandingActions.getBooks, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.getBooksSuccess, (state: LandingState, { books }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      books,
    };
  }),
  on(LandingActions.getBooksFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.getBookById, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.getBookByIdSuccess, (state: LandingState, { book }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      book,
    };
  }),
  on(LandingActions.getBookByIdFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  })
);
