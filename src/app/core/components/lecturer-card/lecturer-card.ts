import { Component, input } from '@angular/core';
import { Lecturer } from '../../entity/lecturer';
import { LecturersService } from '../../services/lecturers.service';
import { environment } from '../../../../environments/environment';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturer-card',
  imports: [NgClass],
  templateUrl: './lecturer-card.html',
  styleUrl: './lecturer-card.scss',
})
export class LecturerCard {
  env = environment;
  lecturer = input.required<Lecturer>();
  redirectUrl = input<boolean>(false);
  photoUrl?: string;

  constructor(
    protected readonly lecturersService: LecturersService,
    protected readonly router: Router,
  ) {}
}
