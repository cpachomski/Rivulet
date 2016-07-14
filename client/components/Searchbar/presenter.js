import React from 'react';
import Socket from '../../socket';
import './style.scss'

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
			<div className='searchbar centered'>
				<form
					onSubmit={this.updateFilter}>
					<input
						placeholder='Search...'
						className='searchbar--input'
						type='text'
						onKeyUp={this.updateSearchTerm} />
					{
						currentFilter.split('').length > 0 ?
							<span>Current stream: <strong>{ currentFilter }</strong></span>
						:
							null
					}
				</form>
			</div>
		)
	}
})