import { Action } from 'redux';

export interface IState {
    points: IAdress[];
    newPlacesName: string;
    newPlacesCoords: number[];
    adressSearchTerm: string;
    error: boolean;
}

export interface IAdress {
    name: string;
    coords: number[];
    id: number;
}

export interface IUpdatedAction extends Action {
    payload?: any;
}