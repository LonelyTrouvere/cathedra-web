import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from "../core/components/link/link";
import { Divider } from "../core/components/divider/divider";

@Component({
  selector: 'app-home-page',
  imports: [Link, Divider],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {
  constructor(protected router: Router) {}
}
