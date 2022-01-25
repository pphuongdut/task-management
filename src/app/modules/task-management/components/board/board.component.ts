import { BoardService } from './../../services/board.services';
import { CardService } from "./../../services/card.services";
import { CardModel } from "@app/modules/task-management/models/card.model";
import { Component, OnInit } from "@angular/core";
import { BoardModel } from "../../models/board.model";

@Component({
    selector: "app-board",
    templateUrl: "./board.component.html",
    styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
    constructor(private boardService: BoardService) {}
    board = new BoardModel();
    cards = new Array<CardModel>();
    ngOnInit(): void {
        this.boardService.getBoardById(1).subscribe((data) => {
            this.board = data;
            this.cards = this.board.cards
        });
    }
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
