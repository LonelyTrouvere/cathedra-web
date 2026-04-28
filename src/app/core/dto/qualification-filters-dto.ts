import { ProgramDegree } from '../entity/program';

export interface QualificationFiltersDTO {
  degree?: ProgramDegree;
  startYear?: number;
  endYear?: number;
}
