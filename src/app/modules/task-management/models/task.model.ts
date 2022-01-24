export class TaskModel {
    id: string;
    color: string;
    name: string;
    ordinal: number;
    count: number;
    curator: string; // người phụ trách

    duration: string;
    prioritize: string;
    tags: Array<any>;
    description: string;
    major: Array<any>;

    task: Array<any>;
    constructor(init?: Partial<TaskModel>) {
        Object.assign(this, init);
    }
}
