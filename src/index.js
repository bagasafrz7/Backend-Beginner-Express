const route = require("express").Router()

// import route disini
const house = require('./routes/house')

// buat middle disini
route.use('/house', house)

module.exports = route