import { getCoordsFromPoints } from './';
import { IAdress, IYmaps, IRouter, IWayPoint, IWayPoints } from '../typings';

declare const ymaps: IYmaps;

// updates points on map
export const updateMapReferencePoints = async (router: IRouter, points: IAdress[]): Promise<void> => {
    const getRefPoints = (): Promise<IWayPoints> => {
        return new Promise((resolve) => {
            router.model.events.add('requestsuccess', () => {
                resolve(router.getWayPoints());
            });
        });
    };
    const coords = getCoordsFromPoints(points);
    router.model.setReferencePoints(coords);
    try {
        // waits until new reference points has been set
        await getRefPoints();
    } catch (err) {
        console.error(err.message);
    }
    if (points.length) {
        router.getWayPoints().each((point: IWayPoint, i: number) => {
            const pointName = points[i].name;
            // updates coordinates
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