const fs = require(`fs`)

console.dir(fs.readFile)

fs.readFile(`../assets/hy-lion.rive`, (error, data) => {
	if(error) {
		throw error
	}

	console.log(data)
	console.log(data.toString())
})
