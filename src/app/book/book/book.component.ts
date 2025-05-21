import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookApiService } from '../book-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookFilterService } from '../book-filter/book-filter.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
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
