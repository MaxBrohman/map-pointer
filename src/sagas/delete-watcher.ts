import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints, getRouter } from './selectors';
import { getIndex, getAfterIdxArray, getBeforeIdxArray, updateMapReferencePoints } from '../utils';
import { IAdress, IUpdatedAction } from '../typings';

// get new array of map points without deleted point
const getNewMapPoints = (id: number, points: IAdress[]): IAdress[] => {
    const idx = getIndex(points, id);
    return [...getBeforeIdxArray(points, idx), ...getAfterIdxArray(points, idx)];
};

function* updateMapPoints({ payload }: IUpdatedAction): IterableIterator<any> {
    const points = yield select(getPoints);
    const router = yield select(getRouter);
    const newPoints = yield getNewMapPoints(payload, points);
    // updating points on map
    yield updateMapReferencePoints(router, newPoints);
    yield put({
        type: 'MAP_POINTS_LIST_UPDATED',
        payload: newPoints
    });
};

export function* watchDeleteItem(): IterableIterator<any> {
    yield takeEvery('DELETE_ITEM', updateMapPoints);
};