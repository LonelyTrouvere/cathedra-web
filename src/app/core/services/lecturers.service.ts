import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Lecturer } from '../entity/lecturer';

@Injectable({
  providedIn: 'root',
})
export class LecturersService {
  constructor(protected http: HttpClient) {}

  getActiveLecturers(): Observable<Lecturer[]> {
    return this.http
      .get<Lecturer[]>('/lecturers')
      .pipe(map((lecturers) => lecturers.map((lec) => new Lecturer(lec))));
  }
}
