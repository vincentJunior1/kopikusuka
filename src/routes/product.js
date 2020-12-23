const router = require('Express').Router()
const { authorization, isAdmin } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const {
  getProductByIdRedis,
  clearDataProductRedis
} = require('../middleware/redis')
const {
  getProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct
  // getProductByCategory
} = require('../controller/product')

router.get('/', authorization, getProduct)
router.get('/:id', getProductByIdRedis, getProductById)
router.post('/', authorization, isAdmin, uploadImage, postProduct)
router.patch(
  '/:id',
  authorization,
  isAdmin,
  clearDataProductRedis,
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
