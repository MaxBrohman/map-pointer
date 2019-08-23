import { Action } from 'redux';

export interface IState {
    points: IAdress[];
    newPlacesName: string;
    newPlacesCoords: number[];
}

export interface IAdress {
    name: string;
    coords: number[];
}

export interface IUpdatedAction extends Action {
    payload?: any;
}