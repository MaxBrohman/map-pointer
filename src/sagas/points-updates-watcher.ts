import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints } from './selectors';
import { getIndex, updateArrayWithNewItem } from '../utils';
import { IAdress, IUpdatedAction } from '../typings';

// updates map point with either new name, coordinates, or editing status
const updatePointWithNewProp = (prop: number[] | string | boolean, idx: number, points: IAdress[]): IAdress => {
    const point = points[idx];
    if (typeof prop === 'string') {
        return {
            ...point,
            name: prop
        };
    } else if (typeof prop === 'boolean'){
        return {
            ...point,
            isEditing: !point.isEditing
        };
    } else {
        return {
            ...point,
            coords: prop
        }; 
    }
};

function* updateMapPoints({ payload: { prop, id } }: IUpdatedAction): IterableIterator<any> {
    const oldPoints = yield select(getPoints);
    const idx = yield getIndex(oldPoints, id);
    const newPoint = yield updatePointWithNewProp(prop, idx, oldPoints);
    const updatedPoints = yield updateArrayWithNewItem(oldPoints, newPoint, idx);
    yield put({
        type: 'MAP_POINTS_LIST_UPDATED',
        payload: updatedPoints
    });
};

export function* watchPointsUpdates (): IterableIterator<any> {
    yield takeEvery('POINT_UPDATED', updateMapPoints);
};