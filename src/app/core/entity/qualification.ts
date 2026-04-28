import { AuthorsDTO } from './book';
import { ProgramDegree } from './program';

export interface QualificationDTO {
  id: string;
  studentName: string;
  qualificationName: string;
  group: string;
  degree: ProgramDegree;
  startYear: number;
  endYear: number;
  supervisor: AuthorsDTO;
}

export class Qualification {
  id: string;
  studentName: string;
  qualificationName: string;
  group: string;
  degree: ProgramDegree;
  startYear: number;
  endYear: number;
  supervisor: AuthorsDTO;

  constructor(dto: QualificationDTO) {
    this.id = dto.id;
    this.studentName = dto.studentName;
    this.qualificationName = dto.qualificationName;
    this.group = dto.group;
    this.degree = dto.degree;
    this.startYear = dto.startYear;
    this.endYear = dto.endYear;
    this.supervisor = dto.supervisor;
  }
}
