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
        prioritize: faker.random.number(),
        tags: [],
        description: faker.random.words(),
        major: [],
        todos: [],
    });
    return task;
}

export function randomListTask(): TaskModel[] {
    let size = Math.floor(Math.random() * (5 - 3)) + 3;
    let data: TaskModel[] = new Array(size);
    for (let index = 0; index < size; index++) {
        data[index] = new TaskModel({
            id: faker.random.number(),
            color: faker.commerce.color(),
            name: faker.name.findName(),
            ordinal: faker.random.number(),
            count: faker.random.number(),
            curator: faker.name.findName(), // người phụ trách
            duration: faker.date.future(),
            prioritize: faker.random.number(),
            tags: [],
            description: faker.random.words(),
            major: [],
            todos: [],
        });
    }
    return data;
}
