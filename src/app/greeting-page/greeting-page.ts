import { Component } from '@angular/core';
import { Lecturer, Positions } from '../core/entity/lecturer';
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
    this.provotar = new Lecturer({
      surname: 'Провотер',
      name: 'Олександр',
      middleName: 'Іванович',
      position: Positions.DEPARTMENT_HEAD,
      slug: 'provoter',
      active: false,
      photoUrl: 'assets/provotar.jpg',
      titles: ['Завідувач кафедри ІС', 'доктор фізико-математичних наук', 'професор'],
    });
  }
}
