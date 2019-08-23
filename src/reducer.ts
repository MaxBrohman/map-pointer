import { IState, IUpdatedAction } from './typings';

const initialState: IState = {
    points: [],
    newPlacesName: '',
    newPlacesCoords: [0, 0]
};

export const reducer = (state: IState = initialState, action: IUpdatedAction): IState => {
    switch(action.type){
        case 'MAP_POINT_SELECTED': {
            const newPoint = {
                name: 'route 1',
                coords: action.payload
            };
            return {
                ...state,
                points: [...state.points, newPoint]
            }
        }
        default: {
            return state;
        }
    }
};