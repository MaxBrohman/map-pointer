import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints, getRouter } from './selectors';
import { getArrAfterDelete, updateMapReferencePoints } from '../utils';
import { IUpdatedAction } from '../typings';

function* updateMapPoints({ payload }: IUpdatedAction): IterableIterator<any> {
    const points = yield select(getPoints);
    const router = yield select(getRouter);
    const newPoints = yield getArrAfterDelete(payload, points);
    yield put({
        type: 'MAP_POINTS_LIST_UPDATED',
        payload: newPoints
    });
    // updating points on map
    yield updateMapReferencePoints(router, newPoints);
};

export function* watchDeleteItem(): IterableIterator<any> {
    yield takeEvery('DELETE_ITEM', updateMapPoints);
};