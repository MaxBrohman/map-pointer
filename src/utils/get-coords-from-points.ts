import { IAdress } from '../typings';

// get only coords for map router api
export const getCoordsFromPoints = (points: IAdress[]): number[][] => {
    return points.map(point => point.coords);
};