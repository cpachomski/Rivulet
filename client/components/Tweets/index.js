import React from 'react';
import './style.scss';

import Tweet from '../Tweet'

export default React.createClass({

	getInitialState() {
		return {
			tweets: new Array
		}
	},

	addTweet(tweet) {
		let tweets = this.state.tweets;
		let newTweets = tweets.concat([tweet]);

		if (newTweets.length > 15) {
			newTweets.splice(0, 1)
		}

		this.setState({
			tweets: newTweets
		})
	},

	componentWillMount() {
		let socket = io.connect('http://localhost:3000');
		socket.on('payload', (data) => {
			this.addTweet(data.tweet)
		})
	},

	render() {
		return (
			<div className='tweets-container'>
				<div className='tweets-list'>
					{ 
						this.state.tweets.map((tweet) => {
							return <Tweet tweet={tweet}/>
						})
					}
				</div>
			</div>
		)
	}
});