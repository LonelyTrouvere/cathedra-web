import { inject } from '@angular/core';
import { LecturersService } from '../services/lecturers.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

export const lecturersResolver = () => {
  const lecturersService = inject(LecturersService);
  return lecturersService.getActiveLecturers();
};

export const lecturerResolver = (route: ActivatedRouteSnapshot) => {
  const slug = route.paramMap.get('slug');
  if (!slug) {
    throw new Error('Slug is required');
  }

  const lecturersService = inject(LecturersService);
  return lecturersService.getLecturerBySlug(slug);
}
