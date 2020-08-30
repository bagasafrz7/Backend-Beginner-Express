const router = require("express").Router()
const { getAllHistory, getHistoryById, GetHistoryDays, GetHistoryWeek, GetHistoryYears, GetOrdersDays, GetOrdersWeek, GetOrdersMonth, postHistory, patchHistory } = require('../controller/history');

// GET
router.get("/", getAllHistory);
router.get("/days", GetHistoryDays);
router.get("/week", GetHistoryWeek);
router.get("/years", GetHistoryYears);
router.get("/orders/days", GetOrdersDays);
router.get("/orders/weeks", GetOrdersWeek);
router.get("/orders/month", GetOrdersMonth);
router.get("/:id", getHistoryById);

// POST
router.post("/", postHistory);

// PATCH
router.patch("/:id", patchHistory)

module.exports = router
