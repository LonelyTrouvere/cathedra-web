import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../core/entity/book';
import { BookCard } from '../core/components/book-card/book-card';
import { NgClass, ViewportScroller } from '@angular/common';
import { BooksService } from '../core/services/books.service';
import { Searchbar } from '../core/components/searchbar/searchbar';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, forkJoin, Subscription } from 'rxjs';
import { GetBooksDTO } from '../core/dto/get-books-dto';
import { isValidIsbn } from '../core/utils/is-isbn';

@Component({
  selector: 'app-books-page',
  imports: [BookCard, NgClass, Searchbar, FormsModule, ReactiveFormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnDestroy {
  books = signal<Book[]>([]);
  total = signal<number>(0);
  currentPage = 1;
  limit = 9;
  numberOfPages: number;
  paginationArray: number[] = [];

  formSearchSubscription: Subscription | null = null;
  form: FormGroup<{
    search: FormControl<string | null>;
  }>;

  constructor(
    protected route: ActivatedRoute,
    protected booksService: BooksService,
    protected scroller: ViewportScroller,
    protected formBuilder: FormBuilder,
  ) {
    this.books.set(this.route.snapshot.data['books']);
    this.total.set(this.route.snapshot.data['total']);

    this.form = this.initForm();

    this.numberOfPages = Math.ceil(this.total() / this.books().length);
    this.paginationArray = Array.from({ length: this.numberOfPages }, (_, i) => i + 1);
  }

  initForm() {
    const form = this.formBuilder.group({
      search: [''],
    });

    this.formSearchSubscription = form.controls.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        const params: GetBooksDTO = {
          page: 1,
          limit: this.limit,
        };

        if (isValidIsbn(value || '')) {
          params.isbn = value || undefined;
        } else if (value) {
          params.title = value;
        }

        forkJoin({
          books: this.booksService.getBooks(params),
          total: this.booksService.getBooksTotal(params),
        }).subscribe(({ books, total }) => {
          this.books.set(books);
          this.total.set(total);
          this.currentPage = 1;
          this.numberOfPages = Math.ceil(this.total() / this.books().length);
          this.paginationArray = Array.from({ length: this.numberOfPages }, (_, i) => i + 1);
        });
      });

    return form;
  }

  ngOnDestroy() {
    this.formSearchSubscription?.unsubscribe();
  }

  setPage(page: number) {
    this.booksService.getBooks({ page, limit: this.limit }).subscribe((books) => {
      this.currentPage = page;
      this.books.set(books);
      this.scroller.scrollToPosition([0, 0]);
    });
  }
}
