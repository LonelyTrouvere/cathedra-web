import { Component, input } from '@angular/core';
import { Book } from '../../entity/book';
import { environment } from '../../../../environments/environment';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [NgClass],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly env = environment;
  book = input.required<Book>();

  constructor(protected readonly router: Router) {}

  navigateToLecturer(author: string | undefined) {
    if (!author) return;
    this.router.navigate(['/lecturers', author]);
  }
}
