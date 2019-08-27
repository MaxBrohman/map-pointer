import { Action } from 'redux';

export interface IState {
    points: IAdress[];
    newPointName: string;
    newPlacesCoords: number[];
    error: boolean;
    loading: boolean;
    map: any;
    router: any;
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