import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { GreetingPage } from './greeting-page/greeting-page';
import { WrongRoutePage } from './wrong-route-page/wrong-route-page';

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
    path: 'greeting',
    component: GreetingPage,
    title: 'ISC | Greeting',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: WrongRoutePage,
    title: 'ISC | 404',
  },
];
