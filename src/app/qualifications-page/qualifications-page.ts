import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ProgramDegree } from '../core/entity/program';
import { KeyValuePipe, NgClass } from '@angular/common';
import { Qualification } from '../core/entity/qualification';

@Component({
  selector: 'app-qualifications-page',
  imports: [KeyValuePipe, NgClass],
  templateUrl: './qualifications-page.html',
  styleUrl: './qualifications-page.scss',
})
export class QualificationsPage {
  degreeMapping = {
    [ProgramDegree.BACHELOR]: 'Бакалаврські',
    [ProgramDegree.MASTER]: 'Магістерські',
    [ProgramDegree.DOCTORATE]: 'Докторські',
  }
  degree: ProgramDegree;
  startYear: number;
  endYear: number;

  qualifications: _.Dictionary<Qualification[]> = {};

  constructor(protected route: ActivatedRoute, protected router: Router) {
    this.degree = route.snapshot.queryParams['degree'];
    this.startYear = route.snapshot.queryParams['startYear'];
    this.endYear = route.snapshot.queryParams['endYear'];

    const grouped = _.groupBy<Qualification>(this.route.snapshot.data['qualifications'], (q) => q.group);
    this.qualifications = grouped;
  }

  navigateToLecturer(author: string | undefined) {
    if (!author) return;
    this.router.navigate(['/lecturers', author]);
  }
}
