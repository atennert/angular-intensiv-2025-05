import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  customStyle = {
    color: 'red',
    fontStyle: 'italic'
  };
  headerClass = 'sans';

  readonly content = input.required<Book>();
  readonly detailClick = output<Book>();

  handleDetailClick(clickEvent: MouseEvent) {
    clickEvent.preventDefault();

    this.detailClick.emit(this.content());
  }
}
