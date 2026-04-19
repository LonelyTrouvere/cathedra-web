import { inject } from '@angular/core';
import { BooksService } from '../services/books.service';

export const INIT__BOOKS_DATA = {
  page: 1,
  limit: 9,
};

export const booksResolver = () => {
  const booksService = inject(BooksService);
  return booksService.getBooks(INIT__BOOKS_DATA);
};

export const booksTotalResolver = () => {
  const booksService = inject(BooksService);
  return booksService.getBooksTotal(INIT__BOOKS_DATA);
};
