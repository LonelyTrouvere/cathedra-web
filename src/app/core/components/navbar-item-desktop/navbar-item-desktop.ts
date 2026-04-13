import { Component, input } from '@angular/core';
import { NavSection } from '../../entity/navsection';

@Component({
  selector: 'app-navbar-item-desktop',
  imports: [],
  templateUrl: './navbar-item-desktop.html',
  styleUrl: './navbar-item-desktop.scss',
})
export class NavbarItemDesktop {
  isHovered = false;
  section = input.required<NavSection>();
}
