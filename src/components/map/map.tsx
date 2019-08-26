import React from 'react';
import { IState, IMapProps } from '../../typings';
import { connect } from 'react-redux';

import './map.sass';

const MapContainer = (props: IMapProps): JSX.Element => {
    
    const compStyle = {
        width: '100%',
        height: '100%'
    };

    return (
        <div 
            className="map" 
            id="map" 
            style={compStyle}
        ></div>
    );
};

const mapStateToProps = (state: IState): { router: any } => {
    return {
        router: state.router
    }
};

export default connect(mapStateToProps)(MapContainer);