import { FormControl } from '@angular/forms';

export interface BookForm {
  isbn: FormControl<string>;
  author: FormControl<string>;
  title: FormControl<string>;
  subtitle: FormControl<string>;
  abstract: FormControl<string>;
}
