import { BoardModel } from '@app/modules/task-management/models/board.model';
import {Observable, of} from 'rxjs';
import {random} from 'lodash';

import {environment} from '@environment';
import {LoadParamModel, LoadResultModel} from '@app/modules/core/models';
import { randomBoard, randomListBoard } from 'app/mocks/board/board.mock';

export class BoardService {

    getBoards(): Observable<BoardModel[]> {
        if (environment.production) {
            console.log('API: getBoards');
        }
        return of(randomListBoard());
    }

    getBoardById(param: number): Observable<BoardModel> {
        if (environment.production) {
            console.log('API: getBoardById');
        }
        return of(randomBoard());
    }

    saveBoard(param: BoardModel): Observable<boolean> {
        if (environment.production) {
            console.log('API: saveBoard');
        }
        return of(true);
    }

    deleteBoard(param: number): Observable<boolean> {
        if (environment.production) {
            console.log('API: deleteSalesOrders');
        }
        return of(true);
    }
}
