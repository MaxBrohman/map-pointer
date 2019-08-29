import React from 'react';
import { deleteItem, pointUpdated, draggingListItem, listItemDropped } from '../../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PopintsListItem from '../points-list-item';
import { IPLICMapDispatchToProps, IPointsListItemContainerProps } from '../../typings';
import PointNameInput from '../point-name-input';

const PointsListItemContainer = (props: IPointsListItemContainerProps): JSX.Element => {

    const { name, id, onDelete, isEditing, onInput, onFormSubmit, onEdit, onItemDrag, onItemDrop } = props;

    if (isEditing) {
        // decorators to remember id in closure
        const onSubmitChanges = (id: number): () => void => () => {
            return onFormSubmit(id);
        };
        const onChangeName = (id: number): (name: string) => void => (name: string) => {
            return onInput(id, name);
        };
        return (
            <PointNameInput 
                name={ name } 
                btnLabel={ 'Submit' }
                onInput={ onChangeName(id) }
                onFormSubmit={ onSubmitChanges(id) }
            />
        );
    }

    const onDragStartHandler = (evt: React.DragEvent): void => {
        onItemDrag(id, evt);
    };

    const onDragOverHandler = (evt: React.DragEvent): void => {
        evt.preventDefault();
        const target = (evt.target as HTMLElement);
        const bounds = (target.getBoundingClientRect() as DOMRect);
        const offset = bounds.y + bounds.height / 2;
        if (evt.clientY - offset > 0) {
            target.style.borderBottom = 'solid #80bdff 0.2rem';
            target.style.borderTop = '';
        } else {
            target.style.borderTop = 'solid #80bdff 0.2rem';
            target.style.borderBottom = ''; 
        }
    };

    const onDragLeaveHandler = (evt: React.DragEvent): void => {
        const target = (evt.target as HTMLElement);
        // target.style.borderTop = '';
        // target.style.borderBottom = '';
        target.style.cssText = '';
    };

    return (
        <PopintsListItem 
            name= {name } 
            id={ id } 
            onDelete={ onDelete }
            onEdit={ onEdit }
            onDragStart={ onDragStartHandler }
            onDrop={ (evt: React.DragEvent) => onItemDrop(id, evt) }
            onDragOver={ onDragOverHandler }
            onDragLeave={ onDragLeaveHandler }
        />
    );
};

const mapDispatchToProps = (dispatch: Dispatch): IPLICMapDispatchToProps => {
    return {
        onDelete: (id: number) => dispatch(deleteItem(id)),
        onInput: (id: number, name: string) => dispatch(pointUpdated(id, name)),
        onFormSubmit: (id: number) => dispatch(pointUpdated(id, true)),
        onEdit: (id: number) => dispatch(pointUpdated(id, true)),
        onItemDrag: (id: number, evt: React.DragEvent) => dispatch(draggingListItem(id, evt)),
        onItemDrop: (id: number, evt: React.DragEvent) => dispatch(listItemDropped(id, evt))
    }
};

export default connect(null, mapDispatchToProps)(PointsListItemContainer);