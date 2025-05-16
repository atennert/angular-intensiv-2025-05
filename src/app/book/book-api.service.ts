import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private readonly books: Book[] = [
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

  getAll(): Book[] {
    return this.books;
  }
}
