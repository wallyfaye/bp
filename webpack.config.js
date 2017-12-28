const webpack = require('webpack');
const path = require('path');

module.exports = [
	{
		watch: true,
		entry: ["./server.js"], 
		output: {
			path: path.resolve('./build'), 
			filename: "bundle.js"
		},
		module: {
			rules: [{
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['es2017']
						]
					}
				}]
			}]
		}
	}
]