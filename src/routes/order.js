const router = require("express").Router()
const { getAllOrder, postOrder } = require('../controller/order')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getOrderRedis, clearDataRedis } = require('../middleware/redis')

// GET
router.get("/", authorizationPublic, getOrderRedis, getAllOrder);

// POST
router.post("/", authorizationAdmin, clearDataRedis, postOrder);

module.exports = router