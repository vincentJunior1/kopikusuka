const router = require('Express').Router()
const { getDataChart } = require('../controller/c_dashboard')

router.get('/', getDataChart)

module.exports = router
