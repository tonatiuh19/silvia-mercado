//export const DOMAIN = 'http://localhost:8015/api';
export const DOMAIN = 'https://garbrix.com/silvia/api';

export interface LandingState {
  isLoading?: boolean;
  isError?: boolean;
  books?: BooksModel[];
  book: BooksModel;
}

export interface BooksModel {
  id_books: number;
  title: string;
  price: number;
}
