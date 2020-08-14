const router = require("express").Router()
const { getAllOrder, postOrder } = require('../controller/order')

// GET
router.get("/", getAllOrder);

// POST
router.post("/", postOrder);

module.exports = router