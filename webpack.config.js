const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH = {
	build: path.join(__dirname, "dist"),
	src: path.join(__dirname, "src"),
	main: path.join(__dirname, 'src/main.js'),
	globalScss: path.join(__dirname, "src/style/global.scss")
};


module.exports = {
	entry: {
		main: PATH.main
	},
	output: {
		path: PATH.build,
		filename: "./js/[name].[hash].js"
	},
	module: {
		rules: [

			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					postcss: [require('autoprefixer')()],
					loaders: {
						css: ExtractTextPlugin.extract({
							use: ["style-loader", "css-loader"],
							fallback: 'vue-style-loader'
						}),
						scss: ExtractTextPlugin.extract({
							use: ['css-loader', 'sass-loader'],
							fallback: 'vue-style-loader',

						}).concat(
							{
								loader: 'sass-resources-loader',
								options: {
									resources: PATH.globalScss
								}
							}
						)
					},
					esModule: true

				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: './img/[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: PATH.src + '/index.html',
			chunks: ['main', 'common'],
			filename: "index.html"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: Infinity
		}),
		new OptimizeCssAssetsPlugin({
				cssProcessorOptions: {
					discardComments: {
						removeAll: true
					}
				}
			}),
		new ExtractTextPlugin('./css/[name].[hash].css'),
		new WebpackCleanupPlugin({exclude: ["img/**/*"]})
	],
	resolve: {
		extensions: ['*', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	watch: false,
	/*devServer: {
		stats: "errors-only"
	},*/
	devtool: '#source-map'
};

