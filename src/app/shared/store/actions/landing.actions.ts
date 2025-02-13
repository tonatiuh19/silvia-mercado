import { createAction, props } from '@ngrx/store';
import { BooksModel, CopounModel, PurchasesModel } from '../../../app.model';

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

export const updatePriceBook = createAction(
  `${actor} Update Price Book`,
  props<{ id_books: number; price: string }>()
);

export const updatePriceBookSuccess = createAction(
  `${actor} Update Price Book Success`,
  props<{ book: BooksModel }>()
);

export const updatePriceBookFailure = createAction(
  `${actor} Update Price Book Failure`,
  props<{ error: string }>()
);

export const selectCopouns = createAction(`${actor} Select Coupons`);

export const selectCopounsSuccess = createAction(
  `${actor} Select Coupons Success`,
  props<{ coupons: CopounModel[] }>()
);

export const selectCopounsFailure = createAction(
  `${actor} Select Coupons Failure`,
  props<{ error: string }>()
);

export const insertCoupon = createAction(
  `${actor} Insert Coupon`,
  props<{
    id_books: number;
    value: string;
    discount: number;
    expiration_date: string;
  }>()
);

export const insertCouponSuccess = createAction(
  `${actor} Insert Coupon Success`,
  props<{ coupons: CopounModel[] }>()
);

export const insertCouponFailure = createAction(
  `${actor} Insert Coupon Failure`,
  props<{ error: string }>()
);

export const updateCopoun = createAction(
  `${actor} Update Coupon`,
  props<{
    id_books_coupons: number;
    id_books: number;
    value: string;
    discount: number;
    expiration_date: string;
  }>()
);

export const updateCopounSuccess = createAction(
  `${actor} Update Coupon Success`,
  props<{ coupons: CopounModel[] }>()
);

export const updateCopounFailure = createAction(
  `${actor} Update Coupon Failure`,
  props<{ error: string }>()
);

export const deleteCopoun = createAction(
  `${actor} Delete Coupon`,
  props<{ id_books_coupons: number }>()
);

export const deleteCopounSuccess = createAction(
  `${actor} Delete Coupon Success`,
  props<{ coupons: CopounModel[] }>()
);

export const deleteCopounFailure = createAction(
  `${actor} Delete Coupon Failure`,
  props<{ error: string }>()
);
