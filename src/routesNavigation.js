const router = require('Express').Router()
const product = require('./routes/product')
const category = require('./routes/r_category')
const cupon = require('./routes/r_cupon')
const payment = require('./routes/payment')

router.use('/product', product)
router.use('/category', category)
router.use('/cupon', cupon)
router.use('/payment', payment)

module.exports = router
