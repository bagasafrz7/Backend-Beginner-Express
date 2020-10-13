const route = require("express").Router()

// import route disini
const product = require('./routes/product');
const category = require('./routes/category');
const order = require('./routes/order');
const history = require('./routes/history');
const users = require('./routes/users');
const payment = require('./routes/payment');

// buat middle disini 
route.use('/product', product)
route.use('/category', category)
route.use('/order', order)
route.use('/history', history)
route.use('/users', users)
route.use('/payment', payment)

module.exports = route