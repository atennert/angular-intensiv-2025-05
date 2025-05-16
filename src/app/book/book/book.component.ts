import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  readonly bookApi = inject(BookApiService);
  readonly destroyRef = inject(DestroyRef);

  books: Book[] = [];

  bookSearchTerm = '';

  ngOnInit() {
    this.bookApi.getAll().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: books => this.books = books
    });
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  updateBookSearchTerm(inputEvent: Event) {
    const inputElement = inputEvent.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
