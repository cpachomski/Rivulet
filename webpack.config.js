var webpack = require('webpack');

module.exports = {
	entry: [ './client/index.js'],
	output: {
		path: __dirname + '/public/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /node_modules/,
        		loader: 'react-hot!babel'
			},
			{
				test: /\.scss$/,
        		loaders: ['style', 'css', 'sass']
			}
		]	
	},
	resolve: {
		extensions: ['', '.js', '.jsx', 'scss']
	}
};