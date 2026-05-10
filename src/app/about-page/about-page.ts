import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Positions } from '../core/entity/lecturer';
import { WordFormPipe } from '../core/utils/word-form.pipe';

@Component({
  selector: 'app-about-page',
  imports: [WordFormPipe],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  stats: Record<string, number>;
  positions = Positions;

  constructor(protected route: ActivatedRoute) {
    this.stats = this.route.snapshot.data['stats'];
  }
}
