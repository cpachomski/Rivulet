import React from 'react';
import ReactDOM from 'react-dom';

const Test = React.createClass({
	render() {
		return (
			<h1> From React </h1>
		)
	}
})

ReactDOM.render(<Test/>, document.getElementById('feed'))