export class TaskModel {
    id: string;
    cardId: string;
    color: string;
    name: string;
    ordinal: number;
    count: number;
    curator: string; // người phụ trách
    duration: string;
    prioritize: string;
    tags: Array<string>;
    description: string;
    major: Array<string>;
    todos: Array<string>;

    constructor(init?: Partial<TaskModel>) {
        Object.assign(this, init);
    }
}
export class TodoModel {
    id: string;
    name: string;
    status: number;

    constructor(init?: Partial<TaskModel>) {
        Object.assign(this, init);
    }
}
