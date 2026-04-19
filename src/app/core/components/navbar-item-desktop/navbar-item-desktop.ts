import { Component, input } from '@angular/core';
import { NavSection } from '../../entity/navsection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-item-desktop',
  imports: [],
  templateUrl: './navbar-item-desktop.html',
  styleUrl: './navbar-item-desktop.scss',
})
export class NavbarItemDesktop {
  isHovered = false;
  section = input.required<NavSection>();

  constructor(protected readonly router: Router) {}

  click() {
    if (this.section().url) {
      this.router.navigate([this.section().url]);
    }
  }
}
