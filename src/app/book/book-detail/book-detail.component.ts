import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { switchMap } from 'rxjs';
import { Book } from '../book';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  private readonly bookApi = inject(BookApiService);
//  private readonly destroyRef = inject(DestroyRef);

  readonly isbn = input.required<string>();

  readonly book: Signal<Book | undefined> = toSignal(toObservable(this.isbn).pipe(
    switchMap((isbn) => this.bookApi.getBookByIsbn(isbn)),
  ));

  ngOnInit() {
    // this.route.params.pipe(
    //   switchMap((params: Params) => this.bookApi.getBookByIsbn(params['isbn'])),
    //   takeUntilDestroyed(this.destroyRef)
    // ).subscribe((book: Book) => {
    //   this.book = book;
    // });
  }
}
