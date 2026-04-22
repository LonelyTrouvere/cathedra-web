import { Component } from '@angular/core';
import { Lecturer } from '../core/entity/lecturer';
import { Position } from '../core/entity/position';
import { LecturerCard } from '../core/components/lecturer-card/lecturer-card';
import { Link } from '../core/components/link/link';

@Component({
  selector: 'app-cathedra-history-page',
  imports: [LecturerCard, Link],
  templateUrl: './cathedra-history-page.html',
  styleUrl: './cathedra-history-page.scss',
})
export class CathedraHistoryPage {
  popov: Lecturer;
  bublyk: Lecturer;
  provotar: Lecturer;

  popovFull = false;
  bublykFull = false;
  provotarFull = false;

  constructor() {
    const position: Position = new Position({
      id: '',
      name: 'Завідувач',
      plural: 'Завідувачі',
      sortNumber: 1,
    });

    this.popov = new Lecturer({
      surname: 'Попов',
      name: 'Юрій',
      middleName: 'Дмитрович',
      photoUrl: 'assets/popov.jpg',
      position: position,
      slug: 'popov',
      active: false,
      titles: ['Завідувач кафедри ІС, доктор технічних нау', 'професор'],
    });
    this.bublyk = new Lecturer({
      surname: 'Бублик',
      name: 'Володимир',
      middleName: 'Васильович',
      position: position,
      slug: 'bublyk',
      active: false,
      photoUrl: 'assets/bublyk.jpg',
      titles: ['В.О. завідувача кафедри ІС', 'кандидат фізико-математичних наук', 'доцент'],
    });
    this.provotar = new Lecturer({
      surname: 'Провотер',
      name: 'Олександр',
      middleName: 'Іванович',
      position: position,
      slug: 'provoter',
      active: false,
      photoUrl: 'assets/provotar.jpg',
      titles: ['Завідувач кафедри ІС','доктор фізико-математичних наук', 'професор'],
    });
  }
}
