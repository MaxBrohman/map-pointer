import { getCoordsFromPoints } from './';
import { IAdress, IYmaps, IRouter, IWayPoint, IWayPoints } from '../typings';

declare const ymaps: IYmaps;

// updates points on map
export const updateMapReferencePoints = async (router: IRouter, points: IAdress[]): Promise<void> => {
    // updates points names
    console.log('new points ', points);
    const getRefPoints = (): Promise<IWayPoints> => {
        return new Promise((resolve) => {
            router.model.events.add('requestsuccess', () => {
                resolve(router.getWayPoints());
            });
        });
    };
    const coords = getCoordsFromPoints(points);
    console.log('coords from points ', coords);
    router.model.setReferencePoints(coords);
    try {
        await getRefPoints();
    } catch (err) {
        console.error(err.message);
    }
    if (points.length) {
        router.getWayPoints().each((point: IWayPoint, i: number) => {
            console.log('point ' + i, point);
            const pointName = points[i].name;

            point.properties.set('index', i);
            point.properties.set('coordinates', points[i].coords);
            point.geometry.setCoordinates(points[i].coords);

            point.options.set({
                preset: "islands#grayStretchyIcon",
                // setting custom point view
                iconContentLayout: ymaps.templateLayoutFactory.createClass(
                    `${pointName}`
                )
            });
        });
    }
};