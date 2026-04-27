import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Program, ProgramDegree, ProgramDTO } from '../entity/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  constructor(protected http: HttpClient) {}

  getPrograms(degree: ProgramDegree): Observable<Program[]> {
    return this.http
      .get<ProgramDTO[]>(`/program-info?degree=${degree}`)
      .pipe(map((programs) => programs.map((prog) => new Program(prog))));
  }
}
