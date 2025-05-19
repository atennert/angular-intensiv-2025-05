import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookFilterService {
  filter(books: Book[] | null | undefined, searchTerm: string): Book[] {
    return books?.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())) ?? [];
  }
}
