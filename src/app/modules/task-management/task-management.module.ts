import { TaskService } from "./services/task.services";
import { CardService } from "./services/card.services";
import { BoardService } from "./services/board.services";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";
import { ThemeModule } from "@app/theme";
import { ListBoardsComponent } from "./components/list-boards/list-boards.component";
import { BoardComponent } from "./components/board/board.component";
import { CardComponent } from "./components/card/card.component";
import { TaskComponent } from "./components/task/task.component";

@NgModule({
    declarations: [
        ListBoardsComponent,
        BoardComponent,
        CardComponent,
        TaskComponent,
    ],
    imports: [
        CommonModule,
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: "",
                children: [
                    {
                        path: "",
                        component: ListBoardsComponent,
                    },
                    {
                        path: "boards/:id",
                        component: BoardComponent,
                    },
                ],
            },
        ]),
    ],
    providers: [BoardService, CardService, TaskService],
})
export class TaskManagementModule {}
