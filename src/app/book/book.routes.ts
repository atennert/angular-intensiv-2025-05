import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { confirmLeaveGuard } from './confirm-leave.guard';
import { BookListComponent } from './book-list/book-list.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'detail/:isbn',
        component: BookDetailComponent,
        canDeactivate: [confirmLeaveGuard],
      }
    ]
  },
];
