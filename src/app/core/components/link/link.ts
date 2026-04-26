import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class Link {
  text = input.required<string>();
  url = input<string>();
  clickable = input<CallableFunction>();

  constructor(protected router: Router) {}

  click() {
    if (this.clickable()) {
      this.clickable()!();
      return;
    }

    if (this.url()) {
      if (this.url()!.startsWith('http')) {
        window.open(this.url()!, '_blank');
        return;
      }
      this.router.navigateByUrl(this.url()!);
    }
  }
}
