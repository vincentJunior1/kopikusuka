const router = require('Express').Router()

const {
  getCupon,
  postCupon,
  updateProduct,
  deleteCupon,
  getCuponById
} = require('../controller/c_cupon')

router.get('/', getCupon)
router.get('/:id', getCuponById)
router.post('/', postCupon)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteCupon)

module.exports = router
