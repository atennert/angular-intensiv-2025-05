import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { isUserAuthenticatedGuard } from './is-user-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about'
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.routes').then(m => m.bookRoutes),
    canMatch: [isUserAuthenticatedGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
