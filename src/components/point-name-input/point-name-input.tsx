import React from 'react';
import { IPointNameInputProps } from '../../typings/point-name-input';
import { onChangeHelper } from '../../utils';

import './point-name-input.sass';

const PointNameInput = (props: IPointNameInputProps): JSX.Element => {
  const { name, onInput, onFormSubmit, btnLabel } = props;

  const onNameSubmit = (evt: React.FormEvent): void => {
		evt.preventDefault();
		onFormSubmit(name);
  	};

  	return (
		<form 
			className="input-group name-input-form"
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
				<button className="btn btn-outline-secondary" type="submit">{ btnLabel }</button>
			</div>
		</form>
  	);
};

export default PointNameInput;