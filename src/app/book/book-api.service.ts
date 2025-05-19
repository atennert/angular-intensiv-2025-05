import { inject, Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:4730/books`).pipe(share());
  }
}
