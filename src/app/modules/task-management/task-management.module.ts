import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";
import { ThemeModule } from "@app/theme";
import { ListBoardsComponent } from "./components/list-boards/list-boards.component";
import { BoardComponent } from "./components/board/board.component";
import { CardComponent } from "./components/card/card.component";
import { TaskManagementComponent } from "./components/task-management/task-management.component";

@NgModule({
    declarations: [ListBoardsComponent, BoardComponent, CardComponent],
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
})
export class TaskManagementModule {}
