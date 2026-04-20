import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { WrongRoutePage } from './wrong-route-page/wrong-route-page';
import { ServerErrorPage } from './server-error-page/server-error-page';
import { LecturersListPage } from './lecturers-list-page/lecturers-list-page';
import { lecturerResolver, lecturersResolver } from './core/resolvers/lecturers.resolver';
import { LecturarePage } from './lecturare-page/lecturare-page';
import { BooksPage } from './books-page/books-page';
import { booksResolver, booksTotalResolver } from './core/resolvers/books.resolver';
import { positionsResolver } from './core/resolvers/positions.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'ISC | Home',
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'ISC | About',
  },
  {
    path: 'library',
    component: BooksPage,
    title: 'ISC | Library',
    resolve: {
      books: booksResolver,
      total: booksTotalResolver,
    },
  },
  {
    path: 'lecturers',
    component: LecturersListPage,
    title: 'ISC | Lecturers',
    resolve: {
      lecturers: lecturersResolver,
      positions: positionsResolver,
    },
  },
  {
    path: 'lecturers/:slug',
    component: LecturarePage,
    title: 'ISC | Lecturers',
    resolve: {
      lecturer: lecturerResolver,
    },
  },
  {
    path: 'server-error',
    component: ServerErrorPage,
    title: 'ISC | 500',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: WrongRoutePage,
    title: 'ISC | 404',
  },
];
