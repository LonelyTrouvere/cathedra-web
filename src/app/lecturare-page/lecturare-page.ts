import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecturer } from '../core/entity/lecturer';
import { environment } from '../../environments/environment';
import { Link } from "../core/components/link/link";

@Component({
  selector: 'app-lecturare-page',
  imports: [Link],
  templateUrl: './lecturare-page.html',
  styleUrl: './lecturare-page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LecturarePage {
  lecturer: Lecturer;
  readonly env = environment;
  publicationExtended = false;
  historyExtended = false;

  constructor(protected route: ActivatedRoute) {
    this.lecturer = this.route.snapshot.data['lecturer'];
  }

  get titles(): string | null {
    if (!this.lecturer.titles || this.lecturer.titles.length <= 0) {
      return null;
    }

    return this.lecturer.titles.join(', ');
  }

  get publications(): string[] {
    if (!this.lecturer.publications) {
      return [];
    }

    return this.lecturer.publications.slice(0, this.publicationExtended ? undefined : 3);
  }

  get personalHistory(): string[] {
    if (!this.lecturer.personalHistory) {
      return [];
    }

    return this.lecturer.personalHistory.slice(0, this.historyExtended ? undefined : 3);
  }
}
