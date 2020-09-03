const router = require("express").Router()
const { getAllCategory, getCategoryByName, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controller/category')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getCategoryByIdRedis, getCategoryRedis, getSearchCategoryRedis, clearDataRedis } = require('../middleware/redis')
const upload = require('../middleware/multer')

// GET
router.get("/", authorizationPublic, getCategoryRedis, getAllCategory);
router.get("/search", authorizationPublic, getSearchCategoryRedis, getCategoryByName)
router.get("/:id", authorizationPublic, getCategoryByIdRedis, getCategoryById);

// POST
router.post("/", authorizationAdmin, postCategory);

// PATCH/PUT
router.patch("/:id", authorizationAdmin, clearDataRedis, patchCategory);

// DELETE
router.delete("/:id", authorizationAdmin, clearDataRedis, deleteCategory);

module.exports = router