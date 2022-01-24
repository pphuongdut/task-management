import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-boards',
  templateUrl: './list-boards.component.html',
  styleUrls: ['./list-boards.component.scss']
})
export class ListBoardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
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
}
