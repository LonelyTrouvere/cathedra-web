import { Component, ViewEncapsulation } from '@angular/core';
import { LecturersService } from '../core/services/lecturers.service';
import { Lecturer } from '../core/entity/lecturer';
import { LecturerCard } from '../core/components/lecturer-card/lecturer-card';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { KeyValuePipe } from '@angular/common';
import { Divider } from "../core/components/divider/divider";

@Component({
  selector: 'app-lecturers-list-page',
  imports: [LecturerCard, KeyValuePipe, Divider],
  templateUrl: './lecturers-list-page.html',
  styleUrl: './lecturers-list-page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LecturersListPage {
  formatedLecturers: Record<string, Lecturer[]>;

  constructor(
    protected readonly lecService: LecturersService,
    protected route: ActivatedRoute,
  ) {
    this.formatedLecturers = _.groupBy(this.route.snapshot.data['lecturers'] || [], 'position');
  }
}
