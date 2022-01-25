import { CardService } from "./../../services/card.services";
import { TaskService } from "./../../services/task.services";
import { TaskModel } from "@app/modules/task-management/models/task.model";
import { CardModel } from "@app/modules/task-management/models/card.model";
import { Component, Input, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    constructor(
        private taskService: TaskService,
        private cardService: CardService
    ) {}
    tasks = new Array<TaskModel>();
    ngOnInit(): void {
        this.taskService.getTasks().subscribe((data) => {
            this.tasks = data;
        });
    }

    @Input() card = CardModel;
    ngOnChanges(changes: SimpleChanges) {
        // if (changes && changes.searchString) {
        //   const currentValue = changes.searchString.currentValue;
        //   const previousValue = changes.searchString.previousValue;
        //   if (currentValue !== previousValue) {
        //     this.loadUsers();
        //   }
        // }
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
