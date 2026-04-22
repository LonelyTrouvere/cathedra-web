import { inject } from '@angular/core';
import { LecturersService } from '../services/lecturers.service';
import { ActivatedRouteSnapshot } from '@angular/router';

export const activeLecturersResolver = () => {
  const lecturersService = inject(LecturersService);
  return lecturersService.getLecturers({ active: true });
};

export const lecturerResolver = (route: ActivatedRouteSnapshot) => {
  const slug = route.paramMap.get('slug');
  if (!slug) {
    throw new Error('Slug is required');
  }

  const lecturersService = inject(LecturersService);
  return lecturersService.getLecturerBySlug(slug);
}
