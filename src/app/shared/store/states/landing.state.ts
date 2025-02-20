import { LandingState } from '../../../app.model';

export const LANDING_FEATURE_KEY = 'landingBoda';

export const initialLandingState: LandingState = {
  isLoading: false,
  isError: false,
  isPaid: null,
  admin: {
    isUserValid: false,
    isCodeValid: false,
    id_books_admin: 0,
    name: '',
    email: '',
  },
  books: [],
  book: {
    id_books: 0,
    title: '',
    price: 0,
  },
  purchases: [],
  coupons: [],
  individualCoupon: {
    id_books_coupons: 0,
    discount: 0,
  },
};
