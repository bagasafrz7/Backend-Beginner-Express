const router = require("express").Router()
const { getAllHistory, getHistoryById, GetHistoryDays, GetHistoryWeek, GetHistoryYears, GetOrdersDays, GetOrdersWeek, GetOrdersMonth, postHistory, patchHistory } = require('../controller/history');
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getHistoryByIdRedis, getHistoryRedis, clearDataRedis } = require('../middleware/redis')

// GET
router.get("/", authorizationPublic, getHistoryRedis, getAllHistory);
router.get("/days", GetHistoryDays);
router.get("/week", GetHistoryWeek);
router.get("/years", GetHistoryYears);
router.get("/orders/days", GetOrdersDays);
router.get("/orders/weeks", GetOrdersWeek);
router.get("/orders/month", GetOrdersMonth);
router.get("/:id", authorizationPublic, getHistoryByIdRedis, getHistoryById);

// POST
router.post("/", authorizationAdmin, clearDataRedis, postHistory);

// PATCH
router.patch("/:id", authorizationAdmin, clearDataRedis, patchHistory)

module.exports = router
