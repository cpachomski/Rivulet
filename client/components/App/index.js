import React from 'react';
import Tweets from '../Tweets'
import Searchbar from '../Searchbar'
import './style.scss';

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
