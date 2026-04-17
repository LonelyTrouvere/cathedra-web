import { inject } from '@angular/core';
import { LecturersService } from '../services/lecturers.service';

export const lecturersResolver = () => {
  const lecturersService = inject(LecturersService);
  return lecturersService.getActiveLecturers();
};
