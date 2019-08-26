import { getCoordsFromPoints } from './';
import { IAdress } from '../typings';

// updates points on map
export const updateMapReferencePoints = (router: any, points: IAdress[]): void => {
    router.model.setReferencePoints(getCoordsFromPoints(points));
};