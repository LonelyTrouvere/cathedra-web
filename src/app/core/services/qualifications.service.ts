import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Program, ProgramDegree, ProgramDTO } from '../entity/program';
import { GetYearsDTO } from '../dto/get-years-dto';

@Injectable({
  providedIn: 'root',
})
export class QualificationsService {
  constructor(protected http: HttpClient) {}

  getQualificationYears(degree: ProgramDegree): Observable<GetYearsDTO[]> {
    return this.http.get<GetYearsDTO[]>(`/qualifications/years?degree=${degree}`);
  }
}
