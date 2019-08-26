import { takeLeading, put, select } from 'redux-saga/effects';
import { getPoints } from './selectors';
import { getCoordsFromPoints } from '../utils';
import { IAdress } from '../typings';
import { Dispatch } from 'redux';

declare const ymaps: any;

// handles map settings and creation
const mapApiHandler = (): any => {
    const map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
    return map;
};

// creates and returns multiRoute object
const routerCreator = (map: any, points: IAdress[], dispatch: Dispatch): any => {
    const coords = getCoordsFromPoints(points);

    const router = new ymaps.multiRouter.MultiRoute({
        referencePoints: coords,
    }, {
        boundsAutoApply: true,
        editorDrawOver: false,
        editorMidPointsType: "way"
    });
    // enables dynamic routing changes
    router.editor.start();

    map.geoObjects.add(router);
    // fits map to container size
    map.container.fitToViewport();

    router.getWayPoints().events.add('dragstart', (evt: any) => {
        const targetCoords = evt.get('target').geometry.getCoordinates();
        // get to know dragging point id
        const draggingPoint = points.filter(point => point.coords[0] === targetCoords[0] 
                                                    && point.coords[1] === targetCoords[1])[0];
        // update point list with new coords
        router.getWayPoints().events.add('dragend', (evt: any) => {
            dispatch({
                type: 'POINT_UPDATED',
                payload: {
                    prop: evt.get('target').geometry.getCoordinates(), 
                    point: draggingPoint
                }
            });
        });
    });
    return router;
};

// decorator for getting map
const enableMapApi = (points: IAdress[], dispatch: Dispatch): Promise<any> => {
    return new Promise((resolve) => {
        ymaps.ready().then(() => {
            const map = mapApiHandler();
            const router = routerCreator(map, points, dispatch);
            resolve({
                map,
                router
            });
        });
    });
};

const loadMap = (dispatch: Dispatch) => {
    return function* loadMap (): IterableIterator<any> {
        const points = yield select(getPoints);
        const { map, router } = yield enableMapApi(points, dispatch);
        yield put({
            type: 'MAP_LOADED',
            payload: {
                map, 
                router
            }
        });
    };
};


export const onAppLoaded = (dispatch: Dispatch) => {
    return function* onAppLoaded (): IterableIterator<any> {
        yield takeLeading('APP_LOADED', loadMap(dispatch));
    };
};