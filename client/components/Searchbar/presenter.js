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
			</div>
		)
	}
})