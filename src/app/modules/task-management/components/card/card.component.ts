import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    tasks = [
        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "121",
            name: "Board 2",
        },
        {
            id: "122",
            name: "Board 3",
        },
    ];
    onDragStart(e) {
        e.itemData = e.fromData[e.fromIndex];
    }

    onAdd(e) {
        e.toData.splice(e.toIndex, 0, e.itemData);
    }

    onRemove(e) {
        e.fromData.splice(e.fromIndex, 1);
    }
}
