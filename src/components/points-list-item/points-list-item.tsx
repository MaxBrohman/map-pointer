import React from 'react';
import { deleteItem } from '../../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IPointsListItemProps, IPLIMapDispatchToProps } from '../../typings';

import './points-list-item.sass';

const PopintsListItem = (props: IPointsListItemProps): JSX.Element => { 
    return (
        <li className="list-group-item">
            { props.name }
            <button
                type="button"
                className="btn btn-outline-danger float-right list-item-btn"
                onClick={() => props.onDelete(props.id)}
            >
                <i className="fa fa-trash" />
            </button>
            <button
                type="button" 
                className="btn btn-outline-secondary float-right list-item-btn"
            >
                <i className="fa fa-edit" />
            </button>
        </li>
    );
};

const mapDispatchToProps = (dispatch: Dispatch): IPLIMapDispatchToProps => {
    return {
        onDelete: (id: number) => dispatch(deleteItem(id))
    }
};

export default connect(null, mapDispatchToProps)(PopintsListItem);