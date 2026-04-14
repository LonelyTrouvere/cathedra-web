import { Component, ViewEncapsulation } from '@angular/core';
import { Link } from "../link/link";

@Component({
  selector: 'app-footer',
  imports: [Link],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Footer {}
