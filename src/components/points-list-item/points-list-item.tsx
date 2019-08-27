import React from 'react';
import { IPointsListItemProps } from '../../typings';

import './points-list-item.sass';

const PopintsListItem = ({ name, onDelete, id, onEdit }: IPointsListItemProps): JSX.Element => {
    return (
        <li className="list-group-item">
            { name }
            <button
                type="button"
                className="btn btn-outline-danger float-right list-item-btn"
                onClick={ () => onDelete(id) }
            >
                <i className="fa fa-trash" />
            </button>
            <button
                type="button" 
                className="btn btn-outline-secondary float-right list-item-btn"
                onClick={ () => onEdit(id) }
            >
                <i className="fa fa-edit" />
            </button>
        </li>
    );
};


export default PopintsListItem;