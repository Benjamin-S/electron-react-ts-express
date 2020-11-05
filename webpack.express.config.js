const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js'],
		mainFields: ['main', 'module', 'browser']
	},
	entry: './server/index.ts',
	target: 'node',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: [path.resolve(__dirname, '/node_modules/')],
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, './dist/server'),
		filename: 'js/[name].js',
		publicPath: './'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'server.html'),
			filename: path.resolve(__dirname, './dist/server/index.html')
		})
	]
};
