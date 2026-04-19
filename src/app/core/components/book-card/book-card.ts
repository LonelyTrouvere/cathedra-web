import { Component, input } from '@angular/core';
import { Book } from '../../entity/book';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly env = environment;
  book = input.required<Book>();
}
