import React from 'react';
import Socket from '../../socket';

export default React.createClass({

	updateSearchTerm(e) {
		this.props.updateFilterTerm(e.target.value);
	},

	updateFilter(e) {
		e.preventDefault();
		this.props.updateCurrentFilter(this.props.filterTerm)
		
	},

	render() {
		const { currentFilter } = this.props;

		return (
			<div className='searchbar'>
				<form
					onSubmit={this.updateFilter}>
					<input
						className='searchbar--input'
						type='text'
						onKeyUp={this.updateSearchTerm} />
					<input 
						className='searchbar--submit'
						type='submit' />
				</form>
				{
					currentFilter.split('').length > 0 ?
						<span>Filtered by: { currentFilter }</span>
					:
						null
				}
			</div>
		)
	}
})