import { inject, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';
import { BookFilterService } from './book-filter.service';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  private readonly filterService = inject(BookFilterService);

  transform(books: Book[] | null | undefined, searchTerm: string): Book[] {
    return this.filterService.filter(books, searchTerm);
  }
}
