const router = require('express').Router()
const { getSize } = require('../controller/c_size')

router.get('/', getSize)

module.exports = router
