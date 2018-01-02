const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
})