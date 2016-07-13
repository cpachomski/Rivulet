import React from 'react';
import Socket from '../../socket';

export default React.createClass({

	getInitialState() {
		return {
			searchTerm: ''
		}
	},

	updateSearchTerm(e) {

		this.setState({
			searchTerm: e.target.value
		});
	},

	handleSearch(e) {
		e.preventDefault();
		Socket.emit('getNewStream', {searchTerm: this.state.searchTerm})
	},

	render() {
		return (
			<div className='searchbar'>
				<form
					onSubmit={this.handleSearch}>
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