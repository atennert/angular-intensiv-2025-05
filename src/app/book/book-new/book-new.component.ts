import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly form: FormGroup = this.formBuilder.group({
    isbn: this.formBuilder.control(''),
    author: [''],
    title: [''],
    subtitle: [''],
    abstract: [''],
  });

  submit() {
    console.log(this.form);
  }
}
