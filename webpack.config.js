const path = require(`path`)

module.exports = {
	entry: `./src/main.js`,
	output: {
		path: path.resolve(__dirname, `server/public/javascripts`),
		filename: `main-bundle.js`,
	},
}
