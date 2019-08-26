import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints } from './selectors';
import { getIndex, getAfterIdxArray, getBeforeIdxArray } from '../utils';
import { IAdress, IUpdatedAction } from '../typings';

// type of action depends on props type
// let actionName: string;

// updates map point with either new name, or new coordinates
const updatePointWithNewProp = (prop: number[] | string, point: IAdress): IAdress => {
    if (typeof prop === 'string') {
        // actionName = 'UPDATE_ONLY_MAP_LIST';
        return {
            ...point,
            name: prop
        };
    } else {
        // actionName = 'UPDATE_ONLY_POINTS_ON_MAP';
        return {
            ...point,
            coords: prop
        }; 
    }
};

// replace point in points array with updated one
const updatePointsWithNewPoint = (oldPoints: IAdress[], newPoint: IAdress): IAdress[] => {
    const updatedPointsIdx = getIndex(oldPoints, newPoint.id);
    return [...getBeforeIdxArray(oldPoints, updatedPointsIdx), newPoint, ...getAfterIdxArray(oldPoints, updatedPointsIdx)];
};

function* updateMapPoints(action: IUpdatedAction): IterableIterator<any> {
    const { prop, point } = action.payload;
    const newPoint = yield updatePointWithNewProp(prop, point);
    const oldPoints = yield select(getPoints);
    const updatedPoints = yield updatePointsWithNewPoint(oldPoints, newPoint);
    yield put({
        type: 'MAP_POINTS_LIST_UPDATED',
        payload: updatedPoints
    });
};

export function* watchPointsUpdates (): IterableIterator<any> {
    yield takeEvery('POINT_UPDATED', updateMapPoints);
};