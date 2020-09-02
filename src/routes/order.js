const router = require("express").Router()
const { getAllOrder, postOrder } = require('../controller/order')
const { authorization } = require('../middleware/auth')
const { getOrderRedis } = require('../middleware/redis')

// GET
router.get("/", authorization, getOrderRedis, getAllOrder);

// POST
router.post("/", postOrder);

module.exports = router