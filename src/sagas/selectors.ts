import { IState, IAdress } from '../typings';

export const getMap = (state: IState): any => state.map;

export const getPoints = (state: IState): IAdress[] => state.points;

export const getRouter = (state: IState): any => state.router;