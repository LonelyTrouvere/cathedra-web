export interface LecturerDTO {
  name: string;
  surname: string;
  middleName?: string;
  position: string;
  titles?: string[];
  slug: string;
  photoUrl: string;
}

export class Lecturer {
  name: string;
  surname: string;
  middleName?: string;
  position: string;
  titles?: string[];
  slug: string;
  photoUrl: string;

  constructor(dto: LecturerDTO) {
    this.name = dto.name;
    this.surname = dto.surname;
    this.middleName = dto.middleName;
    this.position = dto.position;
    this.titles = dto.titles;
    this.slug = dto.slug;
    this.photoUrl = dto.photoUrl;
  }

  getFullName(): string {
    return `${this.surname} ${this.name} ${this.middleName ?? ''}`.trim();
  }
}
