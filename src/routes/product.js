const router = require("express").Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct } = require('../controller/product')

// [GET]
router.get("/", getAllProduct);
router.get("/search", getProductByName);
router.get("/:id", getProductById);

// [POST]
router.post("/", postProduct);

// [PATCH/PUT]
router.patch("/:id", patchProduct);

// [DELETE]
router.delete("/:id", deleteProduct);

module.exports = router