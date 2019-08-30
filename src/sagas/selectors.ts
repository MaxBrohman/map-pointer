import { IState, IAdress, IMap, IRouter } from '../typings';

export const getMap = (state: IState): IMap => state.map!;

export const getPoints = (state: IState): IAdress[] => state.points;

export const getRouter = (state: IState): IRouter => state.router!;