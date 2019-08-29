import React from 'react';
import { IPointsListItemProps } from '../../typings';

import './points-list-item.sass';

const PopintsListItem = (props: IPointsListItemProps): JSX.Element => {
    const { name, onDelete, id, onEdit, onDragStart, onDrop, onDragOver, onDragLeave } = props;
    return (
        <li
            className="list-group-item points-list-item"
            onDragStart={ onDragStart }
            onDrop={ onDrop }
            onDragOver={ onDragOver }
            onDragLeave={ onDragLeave }
            draggable
        >
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