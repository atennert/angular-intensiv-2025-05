import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from './book-form.interface';
import { BookApiService } from '../book-api.service';
import { Book } from '../book';
import { authorValidator } from './author.validator';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly bookApi = inject(BookApiService);

  isSaving = false;

  readonly form: FormGroup<BookForm> = this.fb.group<BookForm>({
    isbn: this.fb.control('', [Validators.required]),
    author: this.fb.control('', [Validators.required, authorValidator()]),
    title: this.fb.control('', [Validators.required]),
    subtitle: this.fb.control(''),
    abstract: this.fb.control(''),
  });

  submit() {
    this.isSaving = true;
    this.bookApi.create(this.form.value as Book).subscribe({
      next: () => {
        this.form.reset();
        this.isSaving = false;
      },
    });
  }
}
