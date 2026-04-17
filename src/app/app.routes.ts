import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { WrongRoutePage } from './wrong-route-page/wrong-route-page';
import { ServerErrorPage } from './server-error-page/server-error-page';

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
