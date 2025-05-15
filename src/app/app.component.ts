import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { Book } from './book';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hallo';

  readonly book: Book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'A brilliant novel telling the story of Captain Ahab & ...'
  }
}
