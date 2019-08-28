import { takeLeading, put, select } from 'redux-saga/effects';
import { getPoints } from './selectors';
import { getCoordsFromPoints, updateMapReferencePoints } from '../utils';
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

    const wayPointEvents = router.getWayPoints().events;

    const dragEndHandler = (evt: any): void => {
        const targetIdx = evt.get('target').properties.get('index');
        dispatch({
            type: 'POINT_DRAGGED',
            payload: {
                coords: evt.get('target').geometry.getCoordinates(), 
                idx: targetIdx
            }
        });
        wayPointEvents.remove('dragend', dragEndHandler);
    };

    const dispatchDragStart = (): void => {
        // update point list with new coords
        wayPointEvents.add('dragend', dragEndHandler);
    };
    
    wayPointEvents.add('dragstart', dispatchDragStart); 

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
        if (points.length) {
            yield updateMapReferencePoints(router, points);
        }
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