import { createAction, props } from '@ngrx/store';
import { BooksModel } from '../../../app.model';

const actor = '[Landing Silvia]';

export const getBooks = createAction(`${actor} Get Books`);

export const getBooksSuccess = createAction(
  `${actor} Get Books Success`,
  props<{ books: BooksModel[] }>()
);

export const getBooksFailure = createAction(
  `${actor} Get Books Failure`,
  props<{ error: string }>()
);

export const getBookById = createAction(
  `${actor} Get Book By Id`,
  props<{ id_books: number }>()
);

export const getBookByIdSuccess = createAction(
  `${actor} Get Book By Id Success`,
  props<{ book: BooksModel }>()
);

export const getBookByIdFailure = createAction(
  `${actor} Get Book By Id Failure`,
  props<{ error: string }>()
);

export const insertPurchase = createAction(
  `${actor} Insert Purchase`,
  props<{
    id_books: number;
    name: string;
    email: string;
    price: string;
    token: string;
    payment_type: string;
  }>()
);

export const insertPurchaseSuccess = createAction(
  `${actor} Insert Purchase Success`,
  props<{ isPaid: boolean }>()
);

export const insertPurchaseFailure = createAction(
  `${actor} Insert Purchase Failure`,
  props<{ error: string }>()
);

export const resetPurchase = createAction(`${actor} Reset Purchase`);
