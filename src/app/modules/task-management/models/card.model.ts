import { TaskModel } from "@app/modules/task-management/models/task.model";
export interface ICardModel {
    id: string;
    boardId: string;
    color: string;
    name: string;
    count: number;
    tasks: Array<TaskModel>;
}
export class CardModel {
    id: string;
    boardId: string;
    color: string;
    name: string;
    count: number;
    tasks: Array<TaskModel>;
    constructor(init?: Partial<CardModel>) {
        Object.assign(this, init);
    }
}
