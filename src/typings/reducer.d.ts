import { Action } from 'redux';
import { IMap, IRouter } from './';

export interface IState {
    points: IAdress[];
    newPointName: string;
    newPlacesCoords: number[];
    error: boolean;
    loading: boolean;
    map: IMap | null;
    router: IRouter | null;
}

export interface IAdress {
    name: string;
    coords: number[];
    id: number;
    isEditing: boolean;
}

export interface IUpdatedAction extends Action {
    payload?: any;
}