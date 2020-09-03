const router = require("express").Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct } = require('../controller/product')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getProductByIdRedis, getProductRedis, getSearchProductRedis, clearDataRedis } = require('../middleware/redis')
const upload = require('../middleware/multer')

// [GET]
router.get("/", authorizationPublic, getProductRedis, getAllProduct);
router.get("/search", authorizationPublic, getSearchProductRedis, getProductByName);
router.get("/:id", authorizationPublic, getProductByIdRedis, getProductById);

// [POST]
router.post("/", authorizationAdmin, upload.single('product_image'), postProduct);

// [PATCH/PUT]
router.patch("/:id", authorizationAdmin, upload.single('product_image'), clearDataRedis, patchProduct);

// [DELETE]
router.delete("/:id", authorizationAdmin, clearDataRedis, deleteProduct);

module.exports = router