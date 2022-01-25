export class TaskModel {
    id: string;
    cardId: string;
    color: string;
    name: string;
    ordinal: number;
    count: number;
    curator: string; // người phụ trách
    duration: string;
    prioritize: number;
    tags: Array<TagModel>;
    description: string;
    major: Array<string>;
    todos: Array<TodoModel>;

    constructor(init?: Partial<TaskModel>) {
        Object.assign(this, init);
    }
}
export class TodoModel {
    id: string;
    name: string;
    status: number;

    constructor(init?: Partial<TodoModel>) {
        Object.assign(this, init);
    }
}
export class TagModel {
    id: string;
    name: string;
    color: string;

    constructor(init?: Partial<TagModel>) {
        Object.assign(this, init);
    }
}
