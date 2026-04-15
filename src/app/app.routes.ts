import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';

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
];
