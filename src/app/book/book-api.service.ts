import { inject, Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private readonly http = inject(HttpClient)

  private readonly baseUrl = 'http://localhost:4730';

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`).pipe(share());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`, book);
  }
}
