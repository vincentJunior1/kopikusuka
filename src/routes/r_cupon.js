const router = require('Express').Router()
const { authorization, isAdmin } = require('../middleware/auth')

const {
  getCupon,
  postCupon,
  updateCupon,
  deleteCupon,
  getCuponById
} = require('../controller/c_cupon')

router.get('/', getCupon)
router.get('/:id', getCuponById)
router.post('/', authorization, isAdmin, postCupon)
router.patch('/:id', authorization, isAdmin, updateCupon)
router.delete('/:id', authorization, isAdmin, deleteCupon)

module.exports = router
