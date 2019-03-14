const fs = require(`fs`)

fs.readFile(`../assets/hy-lion.rive`, (error, data) => {
	if(error) {
		throw error
	}

	console.log(data)
	console.log(data.toString())
})
