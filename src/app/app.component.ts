import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { Book } from './book';
import { BookFilterPipe } from './book-filter/book-filter.pipe';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hallo';

  readonly books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ];

  bookSearchTerm = '';

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  updateBookSearchTerm(inputEvent: Event) {
    const inputElement = inputEvent.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
