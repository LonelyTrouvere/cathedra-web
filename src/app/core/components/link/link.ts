import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class Link {
  text = input.required<string>();
  url = input.required<string>();
}
