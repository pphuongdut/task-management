import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-board",
    templateUrl: "./board.component.html",
    styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
    constructor() {}
    cards = [
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
        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "123",
            name: "Board 1",
        },

        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "123",
            name: "Board 1",
        },
        {
            id: "123",
            name: "Board 1",
        },
    ];
    ngOnInit(): void {}
}