export class BoardModel {
    name: string;
    color: string;
    task: Array<any>;
    count: number;

    constructor(init?: Partial<BoardModel>) {
      Object.assign(this, init);
    }
  }
