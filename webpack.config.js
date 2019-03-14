const path = require(`path`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
// 
module.exports = {
	entry: {
		"main-bundle": `./src/main.js`,
		"i18n-contents": `./src/common/i18n-contents.js`,
	},
	output: {
		path: path.resolve(__dirname, `server/public/javascripts`),
		filename: `[name].js`,
		publicPath: `/src/`,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					`style-loader`,
					`css-loader`,					
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader:`file-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
				},
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader:`url-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
					limit: 10000,
				},
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
}
