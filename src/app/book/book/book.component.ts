import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  readonly bookApi = inject(BookApiService);

  readonly books = this.bookApi.getAll();

  bookSearchTerm = '';

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  updateBookSearchTerm(inputEvent: Event) {
    const inputElement = inputEvent.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
