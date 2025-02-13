//export const DOMAIN = 'http://localhost:8015/api';
export const DOMAIN = 'https://garbrix.com/silvia/api';

export interface LandingState {
  isLoading?: boolean;
  isError?: boolean;
  isPaid: boolean | null;
  admin: AdminModel;
  books?: BooksModel[];
  purchases: PurchasesModel[];
  coupons: CopounModel[];
  book: BooksModel;
}

export interface BooksModel {
  id_books: number;
  title: string;
  price: number;
}

export interface AdminModel {
  isUserValid?: boolean;
  isCodeValid?: boolean;
  id_books_admin: number;
  name: string;
  email: string;
}

export interface PurchasesModel {
  id_book_purchases: number;
  id_books: number;
  name: string;
  email: string;
  price: number;
  stripe_id: string;
  date: string;
  title: string;
}

export interface CopounModel {
  id_books_coupons: number;
  id_books: number;
  value: string;
  discount: number;
  active: number;
  expiration_date: string;
  date: string;
}
