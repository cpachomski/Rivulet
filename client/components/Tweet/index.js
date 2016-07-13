import React from 'react';

export default React.createClass({

	render() {
		const { text, user } = this.props.tweet;

		return (
			<div className='tweet'>
				<h4 className='author'>@{ user.screen_name }</h4>
				<p className='text'>{ text }</p>
			</div>
		)
	}
})