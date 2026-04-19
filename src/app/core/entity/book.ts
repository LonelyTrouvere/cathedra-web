export interface BookDTO {
  title: string;
  publisher: string;
  language: string;
  pages: number;
  isbn: string;
  authors: string[];
  photoUrl: string;
  year: number;
}

export class Book {
  public title: string;
  public publisher: string;
  public language: string;
  public pages: number;
  public isbn: string;
  public authors: string[];
  public photoUrl: string;
  public year: number;

  constructor(data: BookDTO) {
    this.title = data.title;
    this.publisher = data.publisher;
    this.language = data.language;
    this.pages = data.pages;
    this.isbn = data.isbn;
    this.authors = data.authors;
    this.photoUrl = data.photoUrl;
    this.year = data.year;
  }
}
