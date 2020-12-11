const router = require('Express').Router()
const product = require('./routes/product')
const category = require('./routes/r_category')

router.use('/product', product)
router.use('/category', category)

module.exports = router
