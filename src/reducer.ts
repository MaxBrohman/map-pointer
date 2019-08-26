import { IState, IUpdatedAction } from './typings';

const initialState: IState = {
    points: [
        {
            name: 'point 1',
            coords: [55.72869417575584, 37.61394531250001],
            id: 1,
        },
        {
            name: 'point 2',
            coords: [55.79605808882297, 37.70252258300783],
            id: 2,
        },
        {
            name: 'point 3',
            coords: [55.67479646695159, 37.73891479492188],
            id: 3,
        }
    ],
    newPlacesCoords: [0, 0],
    newPointName: '',
    error: false,
    loading: true,
    map: null,
    router: null
};

export const reducer = (state: IState = initialState, action: IUpdatedAction): IState => {
    switch(action.type){
        case 'MAP_LOADED': {
            return {
                ...state,
                error: false,
                loading: false,
                map: action.payload.map,
                router: action.payload.router
            }
        }
        case 'MAP_POINT_SELECTED': {
            const newPoint = {
                name: 'route 1',
                coords: action.payload,
                id: new Date().getTime()
            };
            return {
                ...state,
                points: [...state.points, newPoint]
            }
        }
        case 'ON_NAME_INPUT': {
            return {
                ...state,
                newPointName: action.payload
            }
        }
        case 'NEW_LIST_POINT_ADDED': {
            return {
                ...state,
                points: action.payload,
                newPointName: ''
            };
        }
        case 'MAP_POINTS_LIST_UPDATED': {
            return {
                ...state,
                points: action.payload
            }
        }
        default: {
            return state;
        }
    }
};