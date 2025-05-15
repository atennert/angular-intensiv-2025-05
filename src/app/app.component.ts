import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hallo';

  readonly book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'A brilliant novel telling the story of Captain Ahab & ...'
  }
}
