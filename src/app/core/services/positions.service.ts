import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Position, PositionDTO } from '../entity/position';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(protected http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http
      .get<PositionDTO[]>('/positions')
      .pipe(map((positions) => positions.map((pos) => new Position(pos))));
  }
}
