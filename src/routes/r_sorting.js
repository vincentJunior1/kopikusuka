const router = require('Express').Router()
const { getProductByCategory } = require('../controller/c_sorting')

router.get('/:id', getProductByCategory)
module.exports = router
