const router = require('express').Router()
const { getDataChart } = require('../controller/c_dashboard')

router.get('/', getDataChart)

module.exports = router
