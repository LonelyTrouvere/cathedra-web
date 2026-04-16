import { Component } from '@angular/core';
import { Link } from "../core/components/link/link";

@Component({
  selector: 'app-wrong-route-page',
  imports: [Link],
  templateUrl: './wrong-route-page.html',
  styleUrl: './wrong-route-page.scss',
})
export class WrongRoutePage {}
