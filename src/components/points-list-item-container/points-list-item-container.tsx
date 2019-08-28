import React from 'react';
import { deleteItem, pointUpdated } from '../../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PopintsListItem from '../points-list-item';
import { IPLICMapDispatchToProps, IPointsListItemContainerProps } from '../../typings';
import PointNameInput from '../point-name-input';

const PointsListItemContainer = (props: IPointsListItemContainerProps): JSX.Element => {

    const { name, id, onDelete, isEditing, onInput, onFormSubmit, onEdit } = props;

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

    return (
        <PopintsListItem 
            name= {name } 
            id={ id } 
            onDelete={ onDelete }
            onEdit={ onEdit } 
        />
    );
};

const mapDispatchToProps = (dispatch: Dispatch): IPLICMapDispatchToProps => {
    return {
        onDelete: (id: number) => dispatch(deleteItem(id)),
        onInput: (id: number, name: string) => dispatch(pointUpdated(id, name)),
        onFormSubmit: (id: number) => dispatch(pointUpdated(id, true)),
        onEdit: (id: number) => dispatch(pointUpdated(id, true))
    }
};

export default connect(null, mapDispatchToProps)(PointsListItemContainer);