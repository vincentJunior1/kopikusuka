const router = require('express').Router()
const { paymentProduct } = require('../controller/c_payment')

router.post('/', paymentProduct)

module.exports = router
