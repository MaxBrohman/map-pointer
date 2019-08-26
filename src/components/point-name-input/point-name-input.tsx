import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IPointNameInputProps, IMapFormDispatchToProps } from '../../typings/point-name-input';
import { IState } from '../../typings';
import { onNameInput, newPointAdded } from '../../actions';
import { onChangeHelper } from '../../utils';

import './point-name-input.sass';

const PointNameInput = (props: IPointNameInputProps): JSX.Element => {
  const { name, onInput, onFormSubmit } = props;

  const onNameSubmit = (evt: React.FormEvent): void => {
		evt.preventDefault();
		onFormSubmit(name);
  	};

  	return (
		<form 
			className="input-group mb-3"
			onSubmit={onNameSubmit}
		>
			<input 
				type="text"
				value={name} 
				className="form-control name-input" 
				placeholder="name your point" 
				aria-label="name for point on a map"
				onChange={onChangeHelper(onInput)}
				required
			/>
			<div className="input-group-append">
				<button className="btn btn-outline-secondary" type="submit">Add point</button>
			</div>
		</form>
  	);
};

const mapStateToProps = (state: IState): { name: string } => {
	return {
		name: state.newPointName
	}
};

const mapDispatchToProps = (dispatch: Dispatch): IMapFormDispatchToProps => {
	return {
		onInput: (name: string) => dispatch(onNameInput(name)),
		onFormSubmit: (name: string) => dispatch(newPointAdded(name))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PointNameInput);