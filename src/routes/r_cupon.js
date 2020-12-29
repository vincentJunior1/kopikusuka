const router = require('express').Router()
const { authorization, isAdmin } = require('../middleware/auth')
const {
  getCuponRedis,
  getCuponByIdRedis,
  clearDataCuponRedis
} = require('../middleware/redis')
const uploadCupon = require('../middleware/multerCupon')

const {
  getCupon,
  postCupon,
  updateCupon,
  deleteCupon,
  getCuponById
} = require('../controller/c_cupon')

router.get('/', getCuponRedis, getCupon)
router.get('/:id', getCuponByIdRedis, getCuponById)
router.post(
  '/',
  authorization,
  isAdmin,
  clearDataCuponRedis,
  uploadCupon,
  postCupon
)
router.patch(
  '/:id',
  authorization,
  isAdmin,
  clearDataCuponRedis,
  uploadCupon,
  updateCupon
)
router.delete('/:id', authorization, isAdmin, clearDataCuponRedis, deleteCupon)

module.exports = router
