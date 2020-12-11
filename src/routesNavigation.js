const router = require('Express').Router()
const product = require('./routes/product')
const category = require('./routes/r_category')
const cupon = require('./routes/r_cupon')

router.use('/product', product)
router.use('/category', category)
router.use('/cupon', cupon)

module.exports = router
