import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ISearchPanelProps } from '../../typings/search-panel';
import { IState } from '../../typings';
import { onSearchInput } from '../../actions';
import { onChangeHelper } from '../../utils';

import './search-panel.sass';

const SearchPanel = (props: ISearchPanelProps): JSX.Element => {
  const { term, onInput } = props;

  return (
	<form className="input-group mb-3">
		<input 
			type="text"
			value={term} 
			className="form-control search-input" 
			placeholder="search" 
			aria-label="search for address"
			onChange={onChangeHelper(onInput)}
		/>
		<div className="input-group-append">
			<button className="btn btn-outline-secondary" type="button">Add address</button>
		</div>
	</form>
  );
};

const mapStateToProps = (state: IState): { term: string } => ({
  term: state.adressSearchTerm,
});

const mapDispatchToProps = (dispatch: Dispatch): {onInput: (term: string) => void} => ({
  onInput: (term: string) => dispatch(onSearchInput(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
