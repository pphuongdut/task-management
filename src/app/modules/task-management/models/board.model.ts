import { CardModel } from "@app/modules/task-management/models/card.model";

export class BoardModel {
    id: string;
    name: string;
    cards: Array<CardModel>;
    curator: string; // người phụ trách
    constructor(init?: Partial<BoardModel>) {
        Object.assign(this, init);
    }
}
