const router = require("express").Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct } = require('../controller/product')
const { authorizationPublic, authorizationAdmin } = require('../middleware/auth')
const { getProductByIdRedis, getProductRedis, getSearchProductRedis, clearDataProduct } = require('../middleware/redis')
const uploadImage = require('../middleware/multer')

// [GET]
router.get("/", authorizationPublic, getProductRedis, getAllProduct);
router.get("/search", authorizationPublic, getSearchProductRedis, getProductByName);
router.get("/:id", authorizationPublic, getProductByIdRedis, getProductById);

// [POST]
router.post("/", authorizationAdmin, uploadImage, postProduct);

// [PATCH/PUT]
router.patch("/:id", authorizationAdmin, uploadImage, clearDataProduct, patchProduct);

// [DELETE]
router.delete("/:id", authorizationAdmin, clearDataProduct, deleteProduct);

module.exports = router