
import * as faker from "faker";
import { BoardModel } from "@app/modules/task-management/models/board.model";
import { randomListCard } from "../card/card.mock";

export function randomBoard(): BoardModel {
    let board = new BoardModel({
        id: faker.random.number(),
        name: faker.name.findName(),
        cards: randomListCard(),
        curator: faker.name.findName(),
    });
    return board;
}

export function randomListBoard(): BoardModel[] {
    let size = Math.floor(Math.random() * (5 - 1)) + 1;
    let data: BoardModel[] = new Array(size);
    for (let index = 0; index < size; index++) {
        data[index] = new BoardModel({
            id: faker.random.number(),
            name: faker.name.findName(),
            cards: randomListCard(),
            curator: faker.name.findName(),
        });
    }
    return data;
}
