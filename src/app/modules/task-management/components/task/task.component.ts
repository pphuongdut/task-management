import { TaskModel } from '@app/modules/task-management/models/task.model';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()  task = TaskModel;
  task_ = new TaskModel();
  constructor( private taskService : TaskService) { }

  ngOnInit(): void {
      this.taskService.getTaskById(1).subscribe( (data) => {
            this.task_ = data;

        })
  }

}
