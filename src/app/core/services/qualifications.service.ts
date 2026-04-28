import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Program, ProgramDegree, ProgramDTO } from '../entity/program';
import { GetYearsDTO } from '../dto/get-years-dto';
import { QualificationFiltersDTO } from '../dto/qualification-filters-dto';
import { Qualification, QualificationDTO } from '../entity/qualification';

@Injectable({
  providedIn: 'root',
})
export class QualificationsService {
  constructor(protected http: HttpClient) {}

  getQualificationYears(degree: ProgramDegree): Observable<GetYearsDTO[]> {
    return this.http.get<GetYearsDTO[]>(`/qualifications/years?degree=${degree}`);
  }

  getQualifications(filters: QualificationFiltersDTO): Observable<Qualification[]> {
    return this.http
      .get<QualificationDTO[]>('/qualifications', { params: { ...filters } })
      .pipe(map((dtos) => dtos.map((dto) => new Qualification(dto))));
  }
}
