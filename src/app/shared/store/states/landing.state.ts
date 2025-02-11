import { LandingState } from '../../../app.model';

export const LANDING_FEATURE_KEY = 'landingBoda';

export const initialLandingState: LandingState = {
  isLoading: false,
  isError: false,
  isPaid: null,
  books: [],
  book: {
    id_books: 0,
    title: '',
    price: 0,
  },
};
