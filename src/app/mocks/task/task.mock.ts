import { TagModel, TodoModel } from "./../../modules/task-management/models/task.model";
import * as faker from "faker";
import { TaskModel } from "@app/modules/task-management/models/task.model";

export function randomTask(): TaskModel {
    let task = new TaskModel({
        id: faker.random.number(),
        color: faker.commerce.color(),
        name: faker.name.findName(),
        ordinal: faker.random.number(),
        count: faker.random.number(),
        curator: faker.name.findName(), // người phụ trách
        duration: faker.date.future(),
        prioritize: Math.floor(Math.random() * (4 - 1)) + 1,
        tags: randomListTag(),
        description: faker.random.words(),
        major: [],
        todos: randomListTodo(),
    });
    return task;
}

export function randomListTask(): TaskModel[] {
    let size = Math.floor(Math.random() * (5 - 3)) + 3;
    let data: TaskModel[] = new Array(size);
    let prioritize: number;
    for (let index = 0; index < size; index++) {
        data[index] = new TaskModel({
            id: faker.random.number(),
            color: faker.commerce.color(),
            name: faker.name.findName(),
            ordinal: faker.random.number(),
            count: faker.random.number(),
            curator: faker.name.findName(), // người phụ trách
            duration: faker.date.future(),
            prioritize: Math.floor(Math.random() * (4 - 1)) + 1,
            tags: randomListTag(),
            description: faker.random.words(),
            major: [],
            todos: randomListTodo(),
        });
    }
    return data;
}
export function randomListTodo(): TodoModel[] {
    let size = Math.floor(Math.random() * (4 - 0)) + 0;
    let data: TodoModel[] = new Array(size);
    for (let index = 0; index < size; index++) {
        data[index] = new TodoModel({
            id: faker.random.number(),
            name: faker.name.findName(),
            status: Math.floor(Math.random() * (2 - 1)) + 1,
        });
    }
    return data;
}

export function randomListTag(): TagModel[] {
    let size = Math.floor(Math.random() * (4 - 0)) + 0;
    let data: TagModel[] = new Array(size);
    for (let index = 0; index < size; index++) {
        data[index] = new TagModel({
            id: faker.random.number(),
            name: faker.name.findName(),
            color: faker.commerce.color(),
        });
    }
    return data;
}
