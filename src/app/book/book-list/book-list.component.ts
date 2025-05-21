import { Component, computed, effect, inject, signal, Signal, WritableSignal } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookApiService } from '../book-api.service';
import { BookFilterService } from '../book-filter/book-filter.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-list',
  imports: [
    BookCardComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  readonly bookApi = inject(BookApiService);
  readonly filterService = inject(BookFilterService);
  readonly router = inject(Router);

  readonly books: Signal<Book[]> = toSignal(this.bookApi.getAll(), { initialValue: [] });

  readonly bookSearchTerm: WritableSignal<string> = signal('');

  readonly filteredBooks = computed<Book[]>(() => {
    return this.filterService.filter(this.books(), this.bookSearchTerm())
  });

  readonly logBookCount = effect(() => console.log(`Books: ${this.filteredBooks().length}`));


  async goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);

    await this.router.navigate(['books', 'detail', book.isbn]);
  }

  updateBookSearchTerm(inputEvent: Event) {
    const inputElement = inputEvent.target as HTMLInputElement;
    this.bookSearchTerm.set(inputElement.value);
  }
}
