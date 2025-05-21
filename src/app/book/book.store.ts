import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Book } from './book';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { BookApiService } from './book-api.service';

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
}

export const bookStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, bookApi = inject(BookApiService)) => ({
    getAll: rxMethod<void>(pipe(
      switchMap(() => bookApi.getAll()),
      tap((books) => patchState(store, { books }))
    )),
  }))
)
