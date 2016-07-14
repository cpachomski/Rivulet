import React from 'react';
import './style.scss';

export default React.createClass({

	render() {
		const { text, user, created_at, retweet_count } = this.props.tweet;
		console.log(this.props.tweet);
		return (
			<div className='tweet'>
				<p className='text'>{ text }</p>
				<h4 className='author'>@{ user.screen_name }</h4>
			</div>
		)
	}
})