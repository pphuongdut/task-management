import { TaskModel } from "@app/modules/task-management/models/task.model";

export class CardModel {
    id: string;
    boardId: string;
    color: string;
    count: number;
    name: string;
    tasks: Array<TaskModel>;
    constructor(init?: Partial<CardModel>) {
        Object.assign(this, init);
    }
}
