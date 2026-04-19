export interface GetBooksDTO {
  page: number;
  limit: number;
  isbn?: string;
  title?: string;
}
