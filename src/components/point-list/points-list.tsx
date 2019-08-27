import React from 'react';
import { connect } from 'react-redux';
import { IState, IPointsListProps, IAdress } from '../../typings';
import PointsListItemContainer from '../points-list-item-container';

import './points-list.sass';

const PointsList = (props: IPointsListProps): JSX.Element => {
    
    return (
        <ul className="list-group">
            { props.points.map(({ name, id, isEditing }) => <PointsListItemContainer
                                                                name={ name }
                                                                key={ id }
                                                                id={id}
                                                                isEditing={ isEditing }
                                                            />) }
        </ul>
    );
};

const mapStateToProps = (state: IState): { points: IAdress[] } =>  {
    return {
        points: state.points
    }
};

export default connect(mapStateToProps)(PointsList);