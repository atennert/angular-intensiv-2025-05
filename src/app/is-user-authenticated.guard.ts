import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserStateService } from './user-state.service';

export const isUserAuthenticatedGuard: CanMatchFn = () => {
  const router = inject(Router);
  const userState = inject(UserStateService);
  return userState.isLoggedIn() ? true : router.createUrlTree(['/about']);
};
