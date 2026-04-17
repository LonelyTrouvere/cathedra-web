import { Component, input } from '@angular/core';
import { Lecturer } from '../../entity/lecturer';
import { LecturersService } from '../../services/lecturers.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-lecturer-card',
  imports: [],
  templateUrl: './lecturer-card.html',
  styleUrl: './lecturer-card.scss',
})
export class LecturerCard {
  env = environment;
  lecturer = input.required<Lecturer>();
  photoUrl?: string;

  constructor(protected readonly lecturersService: LecturersService) {}
}
