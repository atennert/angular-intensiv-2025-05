import { Routes } from '@angular/router';
import { BookComponent } from './book/book/book.component';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about'
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/detail/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
