import { createAction, props } from '@ngrx/store';
import { BooksModel, PurchasesModel } from '../../../app.model';

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

export const resetAdmin = createAction(`${actor} Reset Admin`);

export const sendCodeEmail = createAction(
  `${actor} Send Code Email`,
  props<{ email: string }>()
);

export const sendCodeEmailSuccess = createAction(
  `${actor} Send Code Email Success`,
  props<{ admin: any }>()
);

export const sendCodeEmailFailure = createAction(
  `${actor} Send Code Email Failure`,
  props<{ error: string }>()
);

export const validateSessionCode = createAction(
  `${actor} Validate Session Code`,
  props<{ code: string; email: string }>()
);

export const validateSessionCodeSuccess = createAction(
  `${actor} Validate Session Code Success`,
  props<{ admin: any }>()
);

export const validateSessionCodeFailure = createAction(
  `${actor} Validate Session Code Failure`,
  props<{ error: string }>()
);

export const getPurchases = createAction(`${actor} Get Purchases`);

export const getPurchasesSuccess = createAction(
  `${actor} Get Purchases Success`,
  props<{ purchases: PurchasesModel[] }>()
);

export const getPurchasesFailure = createAction(
  `${actor} Get Purchases Failure`,
  props<{ error: string }>()
);
