import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Lecturer } from '../entity/lecturer';
import { GetLecturersDTO } from '../dto/get-lecturers-dto';
import { LecturersByDepartmentStat } from '../entity/dto/lecturers-by-department';

@Injectable({
  providedIn: 'root',
})
export class LecturersService {
  constructor(protected http: HttpClient) {}

  getLecturers(filters?: GetLecturersDTO): Observable<Lecturer[]> {
    const params: Record<string, string> = {};
    if (filters?.active !== undefined) {
      params['active'] = String(filters.active);
    }
    if (filters?.position) {
      params['position'] = filters.position;
    }

    return this.http
      .get<Lecturer[]>('/lecturers', { params })
      .pipe(map((lecturers) => lecturers.map((lec) => new Lecturer(lec))));
  }

  getLecturerBySlug(slug: string): Observable<Lecturer> {
    return this.http.get<Lecturer>(`/lecturers/${slug}`).pipe(map((lec) => new Lecturer(lec)));
  }

  getLecturersByDepartment(): Observable<LecturersByDepartmentStat> {
    return this.http.get<LecturersByDepartmentStat>('/lecturers/stats/by-position');
  }
}
