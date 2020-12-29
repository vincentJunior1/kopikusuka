const router = require('Express').Router()
const { getSize } = require('../controller/c_size')

router.get('/', getSize)

module.exports = router
