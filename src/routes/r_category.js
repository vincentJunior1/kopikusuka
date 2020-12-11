const router = require('Express').Router()
const { getCategory, getCategoryByID } = require('../controller/c_category')

router.get('/', getCategory)
router.get('/:id', getCategoryByID)

module.exports = router
