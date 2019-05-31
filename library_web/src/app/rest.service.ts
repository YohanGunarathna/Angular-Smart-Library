import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:9000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getLibraryBooks(): Observable<any> {
    return this.http.get(endpoint + 'books').pipe(
      map(this.extractData));
  }

  getLibraryDvds(): Observable<any> {
    return this.http.get(endpoint + 'dvds').pipe(
      map(this.extractData));
  }

  getLibraryBooksCount(): Observable<any> {
    return this.http.get(endpoint + 'bookscount').pipe(
      map(this.extractData));
  }

  getLibraryDvdsCount(): Observable<any> {
    return this.http.get(endpoint + 'dvdscount').pipe(
      map(this.extractData));
  }

  getLibraryReaders(): Observable<any> {
    return this.http.get(endpoint + 'readers').pipe(
      map(this.extractData));
  }


  getItemById(id): Observable<any> {
    return this.http.get(endpoint + 'byisbn?isbn=' + id).pipe(
      map(this.extractData));
  }




  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'books/' + id).pipe(
      map(this.extractData));
  }

  saveBook (book): Observable<any> {
    return this.http.post<any>(endpoint + 'addbook', JSON.stringify(book), httpOptions).pipe(
      tap((product) => console.log(`added book w/ id=${book.isbn}`))
    );
  }

  saveDvd (dvd): Observable<any> {
    console.log(dvd);
    return this.http.post<any>(endpoint + 'adddvd', JSON.stringify(dvd), httpOptions).pipe(
      tap((product) => console.log(`added dvd w/ id=${dvd.isbn}`))
    );
  }

  saveReader (reader): Observable<any> {
    console.log(reader);
    return this.http.post<any>(endpoint + 'addreader', JSON.stringify(reader), httpOptions).pipe(
      tap((product) => console.log(`added r w/ id=${reader.id}`))
    );
  }

  borrowItem (borrowItem): Observable<any> {
    console.log(borrowItem);
    return this.http.put<any>(endpoint + 'borrow', JSON.stringify(borrowItem), httpOptions).pipe(
      tap((product) => console.log(`b i w/ id=${borrowItem.isbn}`))
    );
  }

  returnItem (returnItem): Observable<any> {
    console.log(returnItem);
    return this.http.put<any>(endpoint + 'return', JSON.stringify(returnItem), httpOptions).pipe(
      tap((product) => console.log(`r i w/ id=${returnItem.isbn}`))
    );
  }




  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'books/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`))
    );
  }

  deleteBook (isbn): Observable<any> {
    return this.http.delete<any>(endpoint + 'removebook?isbn=' + isbn, httpOptions).pipe(
      tap(_ => console.log(`deleted book isbn=${isbn}`))
    );
  }

  deleteDvd (isbn): Observable<any> {
    return this.http.delete<any>(endpoint + 'removedvd?isbn=' + isbn, httpOptions).pipe(
      tap(_ => console.log(`deleted dvd isbn=${isbn}`))
    );
  }

}
