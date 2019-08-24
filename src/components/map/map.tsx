import React from 'react';
import { IState, IMapProps, IMapEvent } from '../../typings';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { mapPointSelected } from '../../actions';

import './map.sass';

declare const ymaps: any;

const mapApiHandler = () => {
    const map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });


    const router = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            [55.72869417575584, 37.61394531250001],
            [55.67479646695159, 37.73891479492188],
            [55.79605808882297, 37.70252258300783],
            
        ],
    }, {
        boundsAutoApply: true,
        editorDrawOver: false,
        editorMidPointsType: "way"
    });
    // enables dynamic routing changes
    router.editor.start({
        addWayPoints: true,
        removeWayPoints: true,
        addMidPoints: true
    });
    map.geoObjects.add(router);
    // fits map to container size
    map.container.fitToViewport();

    // getting routes active points
    // router.getWayPoints();

    // changing reference points
    // router.model.setReferencePoints([ 
    //     'метро Смоленская',
    //     'метро Текстильщики'
    // ]);
}

ymaps.ready(mapApiHandler);


const MapContainer = (props: IMapProps): JSX.Element => {
    const mapClickHandler = (evt: IMapEvent) => {
        const coords = evt.get('coords');
        console.log(coords);
    };
    const compStyle = {
        width: '100%',
        height: '100%'
    };
    return (
        <div className="map" id="map" style={compStyle}></div>
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