import React from 'react';
import PointsListItem from '../points-list-item';
import { connect } from 'react-redux';
import { IState, IPointsListProps, IAdress } from '../../typings';

import './points-list.sass';

const PointsList = (props: IPointsListProps): JSX.Element => {
    return (
        <ul className="list-group">
            { props.points.map(item => {
                return <PointsListItem />
            }) }
        </ul>
    );
};

const mapStateToProps = (state: IState): { points: IAdress[] } =>  {
    return {
        points: state.points
    }
};

export default connect(mapStateToProps)(PointsList);