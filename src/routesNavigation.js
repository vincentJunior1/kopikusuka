const router = require('Express').Router()
const product = require('./routes/product')
const category = require('./routes/r_category')
const cupon = require('./routes/r_cupon')
const payment = require('./routes/payment')
const Size = require('./routes/r_size')
const Sorting = require('./routes/r_sorting')
const User = require('./routes/user')

router.use('/product', product)
router.use('/category', category)
router.use('/cupon', cupon)
router.use('/payment', payment)
router.use('/size', Size)
router.use('/sorting', Sorting)
router.use('/user', User)

module.exports = router
