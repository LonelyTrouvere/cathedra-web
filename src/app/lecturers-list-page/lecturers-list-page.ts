import { Component, ViewEncapsulation } from '@angular/core';
import { LecturersService } from '../core/services/lecturers.service';
import { Lecturer, Positions } from '../core/entity/lecturer';
import { LecturerCard } from '../core/components/lecturer-card/lecturer-card';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Divider } from '../core/components/divider/divider';

@Component({
  selector: 'app-lecturers-list-page',
  imports: [LecturerCard, Divider],
  templateUrl: './lecturers-list-page.html',
  styleUrl: './lecturers-list-page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LecturersListPage {
  formatedLecturers: [Positions, Lecturer[]][] = [];
  pluralMap = {
    [Positions.DEPARTMENT_HEAD]: 'Завідувачі',
    [Positions.PROFESSOR]: 'Професори',
    [Positions.DOCENT]: 'Доценти',
    [Positions.ASSISTANT]: 'Асистенти',
    [Positions.ENGINEER]: 'Інженери',
    [Positions.STAFF]: 'Співробітники',
  };

  constructor(
    protected readonly lecService: LecturersService,
    protected route: ActivatedRoute,
  ) {
    const lecturers: Lecturer[] = this.route.snapshot.data['lecturers'];
    this.formatedLecturers = _.toPairs(_.groupBy(lecturers, (lec) => lec.position)) as [
      Positions,
      Lecturer[],
    ][];
  }
}
