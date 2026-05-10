import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { WrongRoutePage } from './wrong-route-page/wrong-route-page';
import { ServerErrorPage } from './server-error-page/server-error-page';
import { LecturersListPage } from './lecturers-list-page/lecturers-list-page';
import { lecturerResolver, activeLecturersResolver, lecturersByDepartmentResolver } from './core/resolvers/lecturers.resolver';
import { LecturarePage } from './lecturare-page/lecturare-page';
import { BooksPage } from './books-page/books-page';
import { booksResolver, booksTotalResolver } from './core/resolvers/books.resolver';
import { CathedraHistoryPage } from './cathedra-history-page/cathedra-history-page';
import { GreetingPage } from './greeting-page/greeting-page';
import { ContactsPage } from './contacts-page/contacts-page';
import { ProgramsPage } from './programs-page/programs-page';
import { ProgramPage } from './program-page/program-page';
import { QualificationsPage } from './qualifications-page/qualifications-page';
import { qualificationsResolver } from './core/resolvers/qualification.resolver';

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
    resolve: {
      stats: lecturersByDepartmentResolver,
    },
  },
  {
    path: 'greeting',
    component: GreetingPage,
    title: 'ISC | Greeting',
  },
  {
    path: 'contacts',
    component: ContactsPage,
    title: 'ISC | Contacts',
  },
  {
    path: 'programs',
    component: ProgramsPage,
    title: 'ISC | Programs',
  },
  {
    path: 'programs/:degree',
    component: ProgramPage,
    title: 'ISC | Programs',
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
    path: 'history',
    component: CathedraHistoryPage,
    title: 'ISC | History',
  },
  {
    path: 'lecturers',
    component: LecturersListPage,
    title: 'ISC | Lecturers',
    resolve: {
      lecturers: activeLecturersResolver,
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
    path: 'qualifications',
    component: QualificationsPage,
    title: 'ISC | Qualifications',
    resolve: {
        qualifications: qualificationsResolver
    }
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
