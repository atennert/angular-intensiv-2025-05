import { Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { switchMap } from 'rxjs';
import { Book } from '../book';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly bookApi = inject(BookApiService);
//  private readonly destroyRef = inject(DestroyRef);

  readonly book: Signal<Book | undefined> = toSignal(this.route.params.pipe(
    switchMap((params: Params) => this.bookApi.getBookByIsbn(params['isbn'])),
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
