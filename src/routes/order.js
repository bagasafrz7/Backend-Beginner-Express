const router = require("express").Router()
const { getAllOrder, postOrder } = require('../controller/order')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getOrderRedis, clearDataOrder } = require('../middleware/redis')

// GET
router.get("/", authorizationPublic, getOrderRedis, getAllOrder);

// POST
router.post("/", authorizationAdmin, clearDataOrder, postOrder);

module.exports = router