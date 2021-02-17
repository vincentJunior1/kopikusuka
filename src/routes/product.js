const router = require('express').Router()
const { authorization, isAdmin } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const {
  getProductByIdRedis,
  clearDataProductRedis,
  getProductRedis
} = require('../middleware/redis')
const {
  getProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct
  // getProductByCategory
} = require('../controller/product')

router.get('/', getProductRedis, getProduct)
router.get('/:id', getProductByIdRedis, getProductById)
router.post(
  '/',
  authorization,
  isAdmin,
  clearDataProductRedis,
  uploadImage,
  postProduct
)
router.patch(
  '/:id',
  authorization,
  isAdmin,
  clearDataProductRedis,
  uploadImage,
  patchProduct
)
router.delete(
  '/:id',
  authorization,
  isAdmin,
  clearDataProductRedis,
  deleteProduct
)
// router.get('/getsorting', getProductByCategory)
module.exports = router
