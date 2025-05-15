import { Component, input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = {
    color: 'red',
    fontStyle: 'italic'
  };
  headerClass = 'sans';

  readonly content = input.required<Book>();
}
