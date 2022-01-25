import { TaskModel } from '@app/modules/task-management/models/task.model';
import {Observable, of} from 'rxjs';
import {random} from 'lodash';

import {environment} from '@environment';
import {LoadParamModel, LoadResultModel} from '@app/modules/core/models';
import { randomListTask, randomTask } from 'app/mocks/task/task.mock';

export class TaskService {

    getTasks(): Observable<TaskModel[]> {
        if (environment.production) {
            console.log('API: getTasks');
        }
        return of(randomListTask());
    }

    getTaskById(param: number): Observable<TaskModel> {
        if (environment.production) {
            console.log('API: getTaskById');
        }
        return of(randomTask());
    }

    saveTask(param: TaskModel): Observable<boolean> {
        if (environment.production) {
            console.log('API: saveTask');
        }
        return of(true);
    }

    deleteTask(param: number): Observable<boolean> {
        if (environment.production) {
            console.log('API: deleteSalesOrders');
        }
        return of(true);
    }
}
