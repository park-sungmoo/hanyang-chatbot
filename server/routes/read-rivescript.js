const express = require(`express`)
const fs = require(`fs`)
const router = express.Router()

/* GET users listing. */
router.get(`/`, (req, res, next) => {	
	fs.readFile(`./public/assets/hy-lion.rive`, (error, data) => {
		if(error) {
			throw error
		}
		res.send(data.toString())
	})
})

module.exports = router
