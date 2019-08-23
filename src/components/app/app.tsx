import React from 'react';
import PointsList from '../point-list';
import MapContainer from '../map';

import './app.sass';

const App = (): JSX.Element => {
    return (
        <div className="container">
            <PointsList />
            <MapContainer />
        </div>
    );
};

export default App;