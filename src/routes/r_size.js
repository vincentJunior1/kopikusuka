const router = require('express').Router()
const { getSize, getDelivery } = require('../controller/c_size')

router.get('/size/', getSize)
router.get('/delivery/', getDelivery)

module.exports = router
