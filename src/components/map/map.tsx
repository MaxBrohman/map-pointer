import React from 'react';
import { IState, IMapProps, IMapEvent } from '../../typings';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { YMaps, Map } from 'react-yandex-maps';
import { mapPointSelected } from '../../actions';


import './map.sass';

const MapContainer = (props: IMapProps): JSX.Element => {
    const mapClickHandler = (evt: IMapEvent) => {
        const coords = evt.get('coords');
        console.log(coords);
    };
    return (
        <div className="map">
            <YMaps>
                <Map 
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }} 
                    onLoad={(ymaps => console.log(ymaps))}
                />
            </YMaps>
        </div>
    );
};

const mapStateToProps = (state: IState): { points: number[] } => {
    return {
        points: state.newPlacesCoords
    }
};

const mapDispatchToProps = (dispatch: Dispatch): { onPointChoice: (coords: number[]) => void } => {
    return {
        onPointChoice: (coords: number[]) => dispatch(mapPointSelected(coords))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);