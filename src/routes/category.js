const router = require("express").Router()
const { getAllCategory, getCategoryByName, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controller/category')

// GET
router.get("/", getAllCategory);
router.get("/search", getCategoryByName)
router.get("/:id", getCategoryById);

// POST
router.post("/", postCategory);

// PATCH/PUT
router.patch("/:id", patchCategory);

// DELETE
router.delete("/:id", deleteCategory);

module.exports = router