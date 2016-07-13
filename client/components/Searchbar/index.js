import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Searchbar from './presenter';

function mapStateToProps(state) {
	const { currentFilter, filterTerm } = state.stream;

	return {
		currentFilter,
		filterTerm
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateFilterTerm: bindActionCreators(actions.updateFilterTerm, dispatch),
		updateCurrentFilter: bindActionCreators(actions.updateCurrentFilter, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)