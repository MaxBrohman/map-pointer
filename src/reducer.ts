import { IState, IUpdatedAction } from './typings';

const initialState: IState = {
    points: [],
    newPlacesCoords: [0, 0],
    newPointName: '',
    error: false,
    loading: true,
    map: null,
    router: null
};

export const reducer = (state: IState = initialState, action: IUpdatedAction): IState => {
    switch (action.type) {
        case 'MAP_LOADED': {
            const { map, router } = action.payload;
            return {
                ...state,
                error: false,
                loading: false,
                map: map,
                router: router
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