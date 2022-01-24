export class CardModel {
    id: string;
    color: string;
    name: string;
    ordinal: number;
    count: number;

    duration: string;
    prioritize: string;
    tags: Array<any>;
    description: string;
    major: Array<any>;

    task: Array<any>;
    constructor(init?: Partial<CardModel>) {
        Object.assign(this, init);
    }
}
