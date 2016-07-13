import * as actionTypes from '../constants/actionTypes';

const initialState = {
	filterTerm: '',
	currentFilter: ''
};

function setFilterTerm(state, action) {
	const{ filterTerm } = action;
	return { ...state, filterTerm }
}

function setCurrentFilter(state, action) {
	const { currentFilter } = action;
	return { ...state, currentFilter }
}

export default function (state = initialState, action) {
	switch(action.type) {
		case actionTypes.FILTER_TERM_SET:
			return setFilterTerm(state, action);
		case actionTypes.FILTER_CURRENT_SET:
			return setCurrentFilter(state, action)

	};

	return state;
};