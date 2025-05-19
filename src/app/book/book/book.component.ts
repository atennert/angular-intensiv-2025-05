import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit, OnDestroy {
  readonly bookApi = inject(BookApiService);
  readonly destroyRef = inject(DestroyRef);

  books: Book[] = [];

  bookSearchTerm = '';

  private readonly subscriptions = new Subscription();

  ngOnInit() {
    this.subscriptions.add(this.bookApi.getAll().subscribe({
      next: books => this.books = books
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
