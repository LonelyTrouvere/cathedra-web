export enum ProgramDocumentType {
  SYLLABUS = 'Syllabus', // навчильний план
  PROGRAM = 'Program', // Програми навчальних дисциплін
  CURRICULUM = 'Curriculum', // Опис освітньої програми
}

export enum ProgramDegree {
  BACHELOR = 'bachelor',
  MASTER = 'master',
  DOCTORATE = 'doctorate',
}

export const ProgramDegreeNameViewObject = Object.freeze({
  [ProgramDegree.BACHELOR]: 'Бакалавр',
  [ProgramDegree.MASTER]: 'Магістр',
  [ProgramDegree.DOCTORATE]: 'Доктор філософії',
});

export const ProgramDegreeDescriptionViewObject = Object.freeze({
  [ProgramDegree.BACHELOR]: `Кафедра інтелектуальних програмних систем проводить підготовку бакалаврів в галузі 12 Інформаційні технології за спеціальністю 121 Інженерія програмного забезпечення, освітня програма Програмна інженерія.`,
  [ProgramDegree.MASTER]: 'Магістр',
  [ProgramDegree.DOCTORATE]: 'Доктор філософії',
});

export interface ProgramDTO {
  id: number;
  name: string;
  degree: ProgramDegree;
  documentUrl: string;
  documentType: ProgramDocumentType;
  startYear?: string;
  endYear?: string;
}

export class Program {
  id: number;
  name: string;
  degree: ProgramDegree;
  documentUrl: string;
  documentType: ProgramDocumentType;
  startYear?: string;
  endYear?: string;

  constructor(dto: ProgramDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.degree = dto.degree;
    this.documentUrl = dto.documentUrl;
    this.documentType = dto.documentType;
    this.startYear = dto.startYear;
    this.endYear = dto.endYear;
  }
}
