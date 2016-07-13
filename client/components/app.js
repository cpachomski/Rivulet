import React from 'react';
import Tweets from './Tweets'
import Searchbar from './Searchbar'

export default React.createClass({
	render() {
		return (
			<div id='app'>
				<Searchbar />
				<Tweets />
			</div>
		)
	}
})
