/* eslint-disable no-var */
// outside strict 모드에서 아직 const, let 사용불가로 var 사용
var express = require(`express`)
var router = express.Router()

/* GET home page. */
router.get(`/`, (req, res, next) => {
	res.render(`index`, { title: `Express` })
})

module.exports = router
