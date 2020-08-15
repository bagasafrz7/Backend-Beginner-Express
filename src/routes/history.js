const router = require("express").Router()
const { getAllHistory } = require('../controller/history');

// GET
router.get("/", getAllHistory);

// POST
// router.post("/", postHistory);

module.exports = router
