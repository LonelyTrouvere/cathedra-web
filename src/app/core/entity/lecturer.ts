import { Position, PositionDTO } from "./position";

export interface LecturerDTO {
  name: string;
  surname: string;
  middleName?: string;
  position: PositionDTO;
  titles?: string[];
  slug: string;
  active: boolean;
  photoUrl?: string;
  urls?: LecturerUrl[];
  thesisSupervisions?: string[];
  subjects?: string[];
  publications?: string[];
  personalHistory?: string[];
  courses?: string[];
}

export interface LecturerUrl {
  name: string;
  url: string;
}

export class Lecturer {
  name: string;
  surname: string;
  middleName?: string;
  position: Position;
  active: boolean;
  titles?: string[];
  slug: string;
  photoUrl?: string;
  urls?: LecturerUrl[];
  thesisSupervisions?: string[];
  subjects?: string[];
  publications?: string[];
  personalHistory?: string[];
  courses?: string[];

  constructor(dto: LecturerDTO) {
    this.name = dto.name;
    this.surname = dto.surname;
    this.middleName = dto.middleName;
    this.position = new Position(dto.position);
    this.titles = dto.titles;
    this.active = dto.active;
    this.slug = dto.slug;
    this.photoUrl = dto.photoUrl;
    this.urls = dto.urls;
    this.thesisSupervisions = dto.thesisSupervisions;
    this.subjects = dto.subjects;
    this.publications = dto.publications;
    this.personalHistory = dto.personalHistory;
    this.courses = dto.courses;
  }

  getFullName(): string {
    return `${this.surname} ${this.name} ${this.middleName ?? ''}`.trim();
  }
}
