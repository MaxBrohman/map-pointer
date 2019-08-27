import { takeEvery, put, select } from 'redux-saga/effects';
import { IAdress, IUpdatedAction } from '../typings';
import { getMap, getPoints, getRouter } from './selectors';
import { updateMapReferencePoints } from '../utils';

// creates new point for map points list
const createNewPoint = (name: string, coords: number[]): IAdress => {
    return {
        name,
        coords,
        id: new Date().getTime(),
        isEditing: false
    }
};

// updates existing map points list with additional point
const updatePointsWithNewPoint = (newPoint: IAdress, points: IAdress[]): IAdress[] => {
    return [...points, newPoint];
};

// adds new map point to map and to map point list
function* addNewMapPoint({ payload }: IUpdatedAction): IterableIterator<any> {
    const map = yield select(getMap);
    const router = yield select(getRouter);
    const coords = yield map.getCenter();
    const newPoint = yield createNewPoint(payload, coords);
    const points = yield select(getPoints);
    const newPoints = yield updatePointsWithNewPoint(newPoint, points);
    yield put({
        type: 'NEW_LIST_POINT_ADDED',
        payload: newPoints
    });
    yield updateMapReferencePoints(router, newPoints);
};

export function* watchNewPoint (): IterableIterator<any> {
    yield takeEvery('NEW_POINT_ADDED', addNewMapPoint);
};