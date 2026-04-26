import { Component } from '@angular/core';
import { Lecturer } from '../core/entity/lecturer';
import { Position } from '../core/entity/position';
import { LecturerCard } from "../core/components/lecturer-card/lecturer-card";

@Component({
  selector: 'app-greeting-page',
  imports: [LecturerCard],
  templateUrl: './greeting-page.html',
  styleUrl: './greeting-page.scss',
})
export class GreetingPage {
  provotar: Lecturer;

  constructor() {
    const position: Position = new Position({
      id: '',
      name: 'Завідувач',
      plural: 'Завідувачі',
      sortNumber: 1,
    });

    this.provotar = new Lecturer({
      surname: 'Провотер',
      name: 'Олександр',
      middleName: 'Іванович',
      position: position,
      slug: 'provoter',
      active: false,
      photoUrl: 'assets/provotar.jpg',
      titles: ['Завідувач кафедри ІС', 'доктор фізико-математичних наук', 'професор'],
    });
  }
}
