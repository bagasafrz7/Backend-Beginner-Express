const route = require("express").Router()

// import route disini
const product = require('./routes/product');
const category = require('./routes/category');
const order = require('./routes/order');

// buat middle disini 
route.use('/product', product)
route.use('/category', category)
route.use('./order', order)

module.exports = route