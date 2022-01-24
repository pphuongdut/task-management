import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    tasks: [
        {
            id: "123";
            name: "A";
        },
        {
            id: "123";
            name: "A";
        },

        {
            id: "123";
            name: "A";
        },
        {
            id: "123";
            name: "A";
        }
    ];
}
