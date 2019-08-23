import { IUpdatedAction } from './typings';

export const mapPointSelected = (coords: number[]): IUpdatedAction => {
    return {
        type: 'MAP_POINT_SELECTED',
        payload: coords
    }
};