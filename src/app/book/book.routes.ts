import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { confirmLeaveGuard } from './confirm-leave.guard';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [confirmLeaveGuard],
  }
];
