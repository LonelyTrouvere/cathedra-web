import { Component, ViewEncapsulation } from '@angular/core';
import { NavSection } from '../../entity/navsection';
import { NavbarItemDesktop } from '../navbar-item-desktop/navbar-item-desktop';
import { NgClass } from '@angular/common';
import { Link } from "../link/link";
import { Router } from '@angular/router';

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Про кафедру',
    url: '/about',
    items: [
      { title: 'Привітання завідувача', url: '/greeting' },
      { title: 'Історія кафедри', url: '/history' },
      { title: 'Співробітники', url: '/lecturers' },
    ],
  },
  {
    title: 'Навчання',
    url: '/programs',
    items: [
      { title: 'Бакалавр', url: '/programs/bachelor' },
      { title: 'Магістр', url: '/programs/master' },
      { title: 'Доктор філософії', url: '/programs/doctorate' },
    ],
  },
  // {
  //   title: 'Абітурієнтам',
  //   url: '/section2',
  // },
  // {
  //   title: 'Наука',
  //   url: '/section2',
  // },
  {
    title: 'Бібліотека',
    url: '/library',
  },
  {
    title: 'Контакти',
    url: '/contacts',
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
  imports: [NavbarItemDesktop, NgClass, Link],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Navbar {
  sections = NAV_SECTIONS;
  languages = NAV_LANGUAGES;
  currentlyActiveSection: string | null = null;

  burgerMenuOpen = false;

  constructor(protected router: Router) {}

  toggleBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }

  redirect(url: string) {
    this.burgerMenuOpen = false;
    this.currentlyActiveSection = null;
    this.router.navigate([url]);
  }

  activateSection(sectionTitle: string) {
    if (this.currentlyActiveSection === sectionTitle) {
      this.currentlyActiveSection = null;
      return;
    }

    this.currentlyActiveSection = sectionTitle;
  }
}
