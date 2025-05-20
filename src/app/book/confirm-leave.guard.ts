import { CanDeactivateFn } from '@angular/router';

export const confirmLeaveGuard: CanDeactivateFn<unknown> = () => {
  return window.confirm('Are you sure you want to leave?');
};
