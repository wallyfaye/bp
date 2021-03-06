const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			exclude: ['.gitignore'],
		}),
		new HtmlWebpackPlugin({
			title: 'bp'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: 'babel-loader',
				query: {
					presets: ['react', 'es2017', 'stage-0']
				}
			}
		]
	}
}