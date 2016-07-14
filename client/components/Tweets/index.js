import React from 'react';
import './style.scss';
import Tweet from '../Tweet'
import Socket from '../../socket';

export default React.createClass({

	getInitialState() {
		return {
			tweets: new Array
		}
	},

	addTweet(tweet) {
		let tweets = this.state.tweets;
		let newTweets = tweets.concat([tweet]);

		if (newTweets.length > 100) {
			newTweets.splice(0, 1)
		}

		this.setState({
			tweets: newTweets
		})
	},

	componentWillMount() {
		Socket.on('payload', (data) => {
			this.addTweet(data.tweet)
		})
	},

	render() {
		return (
			<div className='tweets--container centered'>
				<div className='tweets--list'>
					{ 
						this.state.tweets.map((tweet) => {
							return <Tweet key={tweet.id} tweet={tweet}/>
						})
					}
				</div>
			</div>
		)
	}
});