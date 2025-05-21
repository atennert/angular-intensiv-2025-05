import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from './book-form.interface';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly form: FormGroup<BookForm> = this.fb.group<BookForm>({
    isbn: this.fb.control('', [Validators.required]),
    author: this.fb.control('', [Validators.required]),
    title: this.fb.control('', [Validators.required]),
    subtitle: this.fb.control(''),
    abstract: this.fb.control(''),
  });

  submit() {
    console.log(this.form);
  }
}
