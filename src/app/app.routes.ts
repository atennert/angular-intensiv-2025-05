import { Routes } from '@angular/router';
import { BookComponent } from './book/book/book.component';
import { AboutComponent } from './about/about.component';

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
    path: 'about',
    component: AboutComponent
  }
];
