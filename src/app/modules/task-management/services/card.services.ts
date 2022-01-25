import { CardModel } from '@app/modules/task-management/models/card.model';
import {Observable, of} from 'rxjs';
import {random} from 'lodash';

import {environment} from '@environment';
import {LoadParamModel, LoadResultModel} from '@app/modules/core/models';
import { randomCard, randomListCard } from 'app/mocks/card/card.mock';

export class CardService {

    getCards(): Observable<CardModel[]> {
        if (environment.production) {
            console.log('API: getCards');
        }
        return of(randomListCard());
    }

    getCardById(param: number): Observable<CardModel> {
        if (environment.production) {
            console.log('API: getCardById');
        }
        return of(randomCard());
    }

    saveCard(param: CardModel): Observable<boolean> {
        if (environment.production) {
            console.log('API: saveCard');
        }
        return of(true);
    }

    deleteCard(param: number): Observable<boolean> {
        if (environment.production) {
            console.log('API: deleteSalesOrders');
        }
        return of(true);
    }
}
