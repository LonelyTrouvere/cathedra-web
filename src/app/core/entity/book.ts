export interface AuthorsDTO {
  name?: string;
  lecturerId?: {
    name: string;
    surname: string;
    middleName?: string;
    slug: string;
  } 
}

export interface BookDTO {
  title: string;
  publisher: string;
  language: string;
  pages: number;
  isbn: string;
  authors: AuthorsDTO[];
  photoUrl?: string;
  documentUrl?: string;
  year: number;
}

export class Book {
  public title: string;
  public publisher: string;
  public language: string;
  public pages: number;
  public isbn: string;
  public authors: AuthorsDTO[];
  public photoUrl?: string;
  public docUrl?: string;
  public year: number;

  constructor(data: BookDTO) {
    this.title = data.title;
    this.publisher = data.publisher;
    this.language = data.language;
    this.pages = data.pages;
    this.isbn = data.isbn;
    this.authors = data.authors;
    this.photoUrl = data.photoUrl;
    this.docUrl = data.documentUrl;
    this.year = data.year;
  }
}
