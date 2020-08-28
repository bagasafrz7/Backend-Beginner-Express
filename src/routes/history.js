const router = require("express").Router()
const { getAllHistory, getHistoryById, GetHistoryDays, GetHistoryWeek, GetHistoryYears, postHistory, patchHistory } = require('../controller/history');

// GET
router.get("/", getAllHistory);
router.get("/days", GetHistoryDays);
router.get("/week", GetHistoryWeek);
router.get("/years", GetHistoryYears);
router.get("/:id", getHistoryById);

// POST
router.post("/", postHistory);

// PATCH
router.patch("/:id", patchHistory)

module.exports = router
