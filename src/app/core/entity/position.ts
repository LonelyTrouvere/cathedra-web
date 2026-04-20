export interface PositionDTO {
  id: string;
  name: string;
  plural: string;
  sortNumber: number;
}

export class Position {
  public id: string;
  public name: string;
  public plural: string;
  public sortNumber: number;

  constructor(data: PositionDTO) {
    this.id = data.id;
    this.name = data.name;
    this.plural = data.plural;
    this.sortNumber = data.sortNumber;
  }
}
