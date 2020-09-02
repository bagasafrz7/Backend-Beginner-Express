const router = require("express").Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct } = require('../controller/product')
const { authorization } = require('../middleware/auth')
const { getProductByIdRedis, getProductRedis, getSearchProductRedis, clearDataRedis } = require('../middleware/redis')
const upload = require('../middleware/multer')

// [GET]
router.get("/", authorization, getProductRedis, getAllProduct);
router.get("/search", authorization, getSearchProductRedis, getProductByName);
router.get("/:id", authorization, getProductByIdRedis, getProductById);

// [POST]
router.post("/", upload.single('product_image'), postProduct);

// [PATCH/PUT]
router.patch("/:id", clearDataRedis, patchProduct);

// [DELETE]
router.delete("/:id", clearDataRedis, deleteProduct);

module.exports = router