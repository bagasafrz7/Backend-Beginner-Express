const router = require("express").Router()
const { getAllCategory, getCategoryByName, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controller/category')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getCategoryByIdRedis, getCategoryRedis, getSearchCategoryRedis, clearDataCategory } = require('../middleware/redis')
const upload = require('../middleware/multer')

// GET
router.get("/", authorizationPublic, getCategoryRedis, getAllCategory);
router.get("/search", authorizationPublic, getSearchCategoryRedis, getCategoryByName)
router.get("/:id", authorizationPublic, getCategoryByIdRedis, getCategoryById);

// POST
router.post("/", authorizationAdmin, clearDataCategory, postCategory);

// PATCH/PUT
router.patch("/:id", authorizationAdmin, clearDataCategory, patchCategory);

// DELETE
router.delete("/:id", authorizationAdmin, clearDataCategory, deleteCategory);

module.exports = router