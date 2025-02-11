import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from '../../app.model';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  public GET_BOOKS = `${DOMAIN}/getAllBooks.php`;
  public GET_BOOK_BY_ID = `${DOMAIN}/getBookById.php`;
  public INSERT_PURCHASE = `${DOMAIN}/insertPurchase.php`;

  constructor(private httpClient: HttpClient) {}

  public getAllBooks(): Observable<any> {
    return this.httpClient.post(this.GET_BOOKS, {}).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getBookById(id_books: number): Observable<any> {
    return this.httpClient.post(this.GET_BOOK_BY_ID, { id_books }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public insertPurchase(
    id_books: number,
    name: string,
    email: string,
    price: string,
    token: string,
    payment_type: string
  ): Observable<any> {
    return this.httpClient
      .post(this.INSERT_PURCHASE, {
        id_books,
        name,
        email,
        price,
        token,
        payment_type,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
