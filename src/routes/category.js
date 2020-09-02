const router = require("express").Router()
const { getAllCategory, getCategoryByName, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controller/category')
const { authorization } = require('../middleware/auth')
const { getCategoryByIdRedis, getCategoryRedis, getSearchCategoryRedis, clearDataRedis } = require('../middleware/redis')
const upload = require('../middleware/multer')

// GET
router.get("/", authorization, getCategoryRedis, getAllCategory);
router.get("/search", authorization, getSearchCategoryRedis, getCategoryByName)
router.get("/:id", authorization, getCategoryByIdRedis, getCategoryById);

// POST
router.post("/", postCategory);

// PATCH/PUT
router.patch("/:id", clearDataRedis, patchCategory);

// DELETE
router.delete("/:id", clearDataRedis, deleteCategory);

module.exports = router