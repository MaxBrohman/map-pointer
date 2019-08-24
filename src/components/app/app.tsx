import React from 'react';
import PointsList from '../point-list';
import MapContainer from '../map';
import SearchPanel from '../search-panel';

import './app.sass';

const App = (): JSX.Element => {

    return (
        <div className="container d-flex align-items-stretch app-container">
            <div className="d-flex flex-column flex-grow-1 left-container">
                <SearchPanel />
                <PointsList />
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <MapContainer />
            </div>
        </div>
    );
};

export default App;