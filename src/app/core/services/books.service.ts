import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book, BookDTO } from '../entity/book';
import { GetBooksDTO } from '../dto/get-books-dto';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(protected http: HttpClient) {}

  getBooks(data: GetBooksDTO): Observable<Book[]> {
    const params: Record<string, string> = {
      page: data.page.toString(),
      limit: data.limit.toString(),
    };

    if (data.isbn) {
      params['isbn'] = data.isbn;
    }

    if (data.title) {
      params['title'] = data.title;
    }

    return this.http
      .get<BookDTO[]>('/books', {
        params: params,
      })
      .pipe(map((books) => books.map((book) => new Book(book))));
  }

  getBooksTotal(data: GetBooksDTO): Observable<number> {
    const params: Record<string, string> = {
      page: data.page.toString(),
      limit: data.limit.toString(),
    };

    if (data.isbn) {
      params['isbn'] = data.isbn;
    }

    if (data.title) {
      params['title'] = data.title;
    }

    return this.http
      .get<{ total: number }>('/books/total', {
        params: params,
      })
      .pipe(map((data) => data.total));
  }
}
