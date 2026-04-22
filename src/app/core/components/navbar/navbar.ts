import { Component } from '@angular/core';
import { NavSection } from '../../entity/navsection';
import { NavbarItemDesktop } from '../navbar-item-desktop/navbar-item-desktop';

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Про кафедру',
    items: [
      { title: 'Привітання завідувача', url: '/greeting' },
      { title: 'Історія кафедри', url: '/history' },
      { title: 'Співробітники', url: '/lecturers' },
    ],
  },
  {
    title: 'Навчання',
    url: '/section2',
  },
  {
    title: 'Абітурієнтам',
    url: '/section2',
  },
  {
    title: 'Наука',
    url: '/section2',
  },
  {
    title: 'Бібліотека',
    url: '/library',
  },
  {
    title: 'Контакти',
    url: '/section2',
  },
];

const NAV_LANGUAGES: NavSection = {
  title: 'UA',
  url: '/uk',
  items: [
    { title: 'Українська', url: '/uk' },
    { title: 'English', url: '/en' },
  ],
};
@Component({
  selector: 'app-navbar',
  imports: [NavbarItemDesktop],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  sections = NAV_SECTIONS;
  languages = NAV_LANGUAGES;
}
