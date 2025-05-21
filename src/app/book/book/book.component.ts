import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterService } from '../book-filter/book-filter.service';
import { Router, RouterLink } from '@angular/router';
import { bookStore } from '../book.store';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  readonly bookStore = inject(bookStore);
  readonly filterService = inject(BookFilterService);
  readonly router = inject(Router);

  readonly books: Signal<Book[]> = this.bookStore.books;

  readonly bookSearchTerm: WritableSignal<string> = signal('');

  readonly filteredBooks = computed<Book[]>(() => {
    return this.filterService.filter(this.books(), this.bookSearchTerm())
  });

  readonly logBookCount = effect(() => console.log(`Books: ${this.filteredBooks().length}`));

  ngOnInit() {
    this.bookStore.getAll();
  }

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
