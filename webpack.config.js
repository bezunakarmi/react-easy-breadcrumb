var path = require('path');
var webpack = require('webpack');
// const CopyPlugins = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	// context: path.resolve(__dirname, './'),
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'index.js',
		library: '',
		libraryTarget: 'commonjs'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
