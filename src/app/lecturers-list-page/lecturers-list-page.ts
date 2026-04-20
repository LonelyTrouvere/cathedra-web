import { Component, ViewEncapsulation } from '@angular/core';
import { LecturersService } from '../core/services/lecturers.service';
import { Lecturer } from '../core/entity/lecturer';
import { LecturerCard } from '../core/components/lecturer-card/lecturer-card';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { KeyValuePipe } from '@angular/common';
import { Divider } from "../core/components/divider/divider";
import { Position } from '../core/entity/position';

@Component({
  selector: 'app-lecturers-list-page',
  imports: [LecturerCard, KeyValuePipe, Divider],
  templateUrl: './lecturers-list-page.html',
  styleUrl: './lecturers-list-page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LecturersListPage {
  positions: Position[] = [];
  formatedLecturers: [string, Lecturer[]][] = [];

  constructor(
    protected readonly lecService: LecturersService,
    protected route: ActivatedRoute,
  ) {
    this.positions = this.route.snapshot.data['positions'] || [];
    const lecturers: Lecturer[] = this.route.snapshot.data['lecturers'];
    console.log(this.positions);
    this.positions.forEach(pos => {
      this.formatedLecturers.push([pos.plural, lecturers.filter(lec => lec.position.id === pos.id)]);
    });
  }
}
