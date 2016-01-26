var path = require("path");

module.exports = {
	entry: "./index.jsx",
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: ["react", "stage-0", "es2015"]
				}
			}
		]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	}
};