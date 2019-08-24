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
    newPlacesName: '',
    newPlacesCoords: [0, 0],
    adressSearchTerm: '',
    error: false
};

export const reducer = (state: IState = initialState, action: IUpdatedAction): IState => {
    switch(action.type){
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
        case 'ON_SEARCH_INPUT': {
            return {
                ...state,
                adressSearchTerm: action.payload
            }
        }
        default: {
            return state;
        }
    }
};