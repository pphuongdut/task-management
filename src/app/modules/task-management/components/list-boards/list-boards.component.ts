import { BoardService } from './../../services/board.services';
import { BoardModel } from '@app/modules/task-management/models/board.model';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-list-boards",
    templateUrl: "./list-boards.component.html",
    styleUrls: ["./list-boards.component.scss"],
})
export class ListBoardsComponent implements OnInit {
    boards = new Array<BoardModel>();
    constructor(private boardService: BoardService) {}

    ngOnInit(): void {
        this.boardService.getBoards().subscribe( (data) => {
            this.boards = data
        })
    }
}
