import * as actionTypes from '../constants/actionTypes';
import Socket from '../socket';

const setFilterTerm = (filterTerm) => {
	return {
		type: actionTypes.FILTER_TERM_SET,
		filterTerm
	}
};

const setCurrentFilter = (currentFilter) => {
	return {
		type: actionTypes.FILTER_CURRENT_SET,
		currentFilter
	}
}

export function updateFilterTerm(filterTerm) {
	return (dispatch) => {
		dispatch(setFilterTerm(filterTerm));
	};
};

export function updateCurrentFilter(currentFilter) {
	return (dispatch) => {
		Socket.emit('getNewStream', {filterTerm: currentFilter});
		dispatch(setCurrentFilter(currentFilter))
	};
};