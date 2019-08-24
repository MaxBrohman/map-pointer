import { IUpdatedAction } from './typings';

export const mapPointSelected = (coords: number[]): IUpdatedAction => {
    return {
        type: 'MAP_POINT_SELECTED',
        payload: coords
    }
};

export const onSearchInput = (term: string): IUpdatedAction => {
    return {
        type: 'ON_SEARCH_INPUT',
        payload: term
    }
};
