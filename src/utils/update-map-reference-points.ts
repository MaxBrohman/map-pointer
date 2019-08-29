import { getCoordsFromPoints } from './';
import { IAdress } from '../typings';

declare const ymaps: any;

// updates points on map
export const updateMapReferencePoints = async (router: any, points: IAdress[]): Promise<void> => {
    // updates points names
    const getRefPoints = (): Promise<boolean> => {
        return new Promise((resolve) => {
            router.model.events.add('requestsuccess', () => {
                resolve(true);
            });
        });
    };
    router.model.setReferencePoints(getCoordsFromPoints(points));
    try {
        await getRefPoints();
    } catch (err) {
        console.error(err.message);
    }
    
    if (points.length) {
        router.getWayPoints().each((point: any, i: number) => {
            const pointName = points[i].name;
            point.options.setName(pointName);
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