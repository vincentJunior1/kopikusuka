const router = require('Express').Router()

const {
  getCupon,
  postCupon,
  updateCupon,
  deleteCupon,
  getCuponById
} = require('../controller/c_cupon')

router.get('/', getCupon)
router.get('/:id', getCuponById)
router.post('/', postCupon)
router.patch('/:id', updateCupon)
router.delete('/:id', deleteCupon)

module.exports = router
