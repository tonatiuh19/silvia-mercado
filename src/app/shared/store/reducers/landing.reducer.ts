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
      isPaid: null,
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
  }),
  on(LandingActions.insertPurchase, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(
    LandingActions.insertPurchaseSuccess,
    (state: LandingState, { isPaid }) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isPaid,
      };
    }
  ),
  on(LandingActions.insertPurchaseFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.resetPurchase, (state: LandingState, {}) => {
    return {
      ...state,
      isPaid: null,
    };
  }),
  on(LandingActions.sendCodeEmail, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.sendCodeEmailSuccess, (state: LandingState, { admin }) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        isUserValid: admin,
      },
      isLoading: false,
      isError: false,
    };
  }),
  on(LandingActions.sendCodeEmailFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.resetAdmin, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      admin: {
        isUserValid: false,
        isCodeValid: false,
        id_books_admin: 0,
        name: '',
        email: '',
      },
    };
  }),
  on(LandingActions.validateSessionCode, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(
    LandingActions.validateSessionCodeSuccess,
    (state: LandingState, { admin }) => {
      if (!admin) {
        return {
          ...state,
          admin: {
            ...state.admin,
            isCodeValid: admin,
          },
          isLoading: false,
          isError: false,
        };
      }
      return {
        ...state,
        admin: {
          ...state.admin,
          isCodeValid: true,
          id_books_admin: admin.id_books_admin,
          name: admin.name,
          email: admin.email,
        },
        isLoading: false,
        isError: false,
      };
    }
  ),
  on(LandingActions.validateSessionCodeFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.getPurchases, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(
    LandingActions.getPurchasesSuccess,
    (state: LandingState, { purchases }) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        purchases,
      };
    }
  ),
  on(LandingActions.getPurchasesFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.updatePriceBook, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.updatePriceBookSuccess, (state: LandingState, { book }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      book,
    };
  }),
  on(LandingActions.updatePriceBookFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.selectCopouns, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(
    LandingActions.selectCopounsSuccess,
    (state: LandingState, { coupons }) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        coupons,
      };
    }
  ),
  on(LandingActions.selectCopounsFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.insertCoupon, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.insertCouponSuccess, (state: LandingState, { coupons }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      coupons: coupons,
    };
  }),
  on(LandingActions.insertCouponFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.updateCopoun, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.updateCopounSuccess, (state: LandingState, { coupons }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      coupons,
    };
  }),
  on(LandingActions.updateCopounFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }),
  on(LandingActions.deleteCopoun, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(LandingActions.deleteCopounSuccess, (state: LandingState, { coupons }) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      coupons,
    };
  }),
  on(LandingActions.deleteCopounFailure, (state: LandingState, {}) => {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  })
);
