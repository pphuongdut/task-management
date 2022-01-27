import { TaskModel } from "./../../models/task.model";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
    constructor() {}
    @Input() public task: TaskModel;
    ngOnInit(): void {}
}
