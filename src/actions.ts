import { IUpdatedAction } from './typings';

export const mapPointSelected = (coords: number[]): IUpdatedAction => {
    return {
        type: 'MAP_POINT_SELECTED',
        payload: coords
    }
};

export const onNameInput = (name: string): IUpdatedAction => {
    return {
        type: 'ON_NAME_INPUT',
        payload: name
    }
};

export const newPointAdded = (name: string): IUpdatedAction => {
    return {
        type: 'NEW_POINT_ADDED',
        payload: name
    }
};

export const onAppLoaded = (): IUpdatedAction => {
    return {
        type: 'APP_LOADED'
    }
};
