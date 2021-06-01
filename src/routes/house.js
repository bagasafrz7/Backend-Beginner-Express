const router = require("express").Router()
const {getHouse} = require('../controller/house')

router.get("/",  getHouse);

module.exports = router