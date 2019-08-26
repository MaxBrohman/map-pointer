import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints } from './selectors';
import { getIndex } from '../utils';
import { IAdress, IUpdatedAction } from '../typings';

// type of action depends on props type
let actionName: string;

// updates map point with either new name, or new coordinates
const updatePointWithNewProp = (prop: number[] | string, point: IAdress): IAdress => {
    if (typeof prop === 'string') {
        actionName = 'UPDATE_ONLY_MAP_LIST';
        return {
            ...point,
            name: prop
        };
    } else {
        actionName = 'UPDATE_ONLY_POINTS_ON_MAP';
        return {
            ...point,
            coords: prop
        }; 
    }
};

const updatePointsWithNewPoint = (oldPoints: IAdress[], newPoint: IAdress): IAdress[] => {
    const updatedPointsId = getIndex(oldPoints, newPoint.id);
    const beforePoints = [...oldPoints.slice(0, updatedPointsId)];
    const afterPoint = [...oldPoints.slice(updatedPointsId + 1)];
    return [...beforePoints, newPoint, ...afterPoint];
};

function* updateMapPoints(action: IUpdatedAction): IterableIterator<any> {
    const { prop, point } = action.payload;
    const newPoint = yield updatePointWithNewProp(prop, point);
    const oldPoints = yield select(getPoints);
    const updatedPoints = yield updatePointsWithNewPoint(oldPoints, newPoint);
    yield put({
        type: actionName,
        payload: updatedPoints
    });
};

export function* watchPointsUpdates (): IterableIterator<any> {
    yield takeEvery('POINT_UPDATED', updateMapPoints);
};