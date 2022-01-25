
import * as faker from "faker";
import { CardModel } from "@app/modules/task-management/models/card.model";
import { randomListTask } from "../task/task.mock";

export function randomCard(): CardModel {
    let card = new CardModel({
        id: faker.random.number(),
        name: faker.name.findName(),
        color: faker.commerce.color(),
        count: faker.random.number(),
        tasks: randomListTask(),
    });
    return card;
}

export function randomListCard(): CardModel[] {
    let size = Math.floor(Math.random() * (10 - 3)) + 3;
    let data: CardModel[] = new Array(size);
    for (let index = 0; index < size; index++) {

        data[index] = new CardModel({
            id: faker.random.number(),
            name: faker.name.findName(),
            color: faker.commerce.color(),
            count: faker.random.number(),
            tasks: randomListTask(),
        });
    }
    return data;
}
