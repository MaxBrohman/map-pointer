import { takeLatest, put, select } from 'redux-saga/effects';
import { IAdress, IUpdatedAction } from '../typings';
import { getPoints, getRouter } from './selectors';
import { updateMapReferencePoints, updateArrayWithNewItem } from '../utils';

// creates new point for map points list
const updatePoint = (point: IAdress, coords: number[]): IAdress => {
    return {
        ...point,
        coords
    }
};

// adds new map point to map and to map point list
function* updateDraggingPoint({ payload: { idx, coords } }: IUpdatedAction): IterableIterator<any> {
    const oldPoints = yield select(getPoints);
    const newPoint = yield updatePoint(oldPoints[idx], coords);
    const updatedPoints = yield updateArrayWithNewItem(oldPoints, newPoint, idx);
    const router = yield select(getRouter);
    yield put({
        type: 'MAP_POINTS_LIST_UPDATED',
        payload: updatedPoints
    });
    yield updateMapReferencePoints(router, updatedPoints);
};

export function* watchPointsDrag (): IterableIterator<any> {
    yield takeLatest('POINT_DRAGGED', updateDraggingPoint);
};