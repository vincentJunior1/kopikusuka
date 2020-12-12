const router = require('express').Router()
const {
  paymentProduct,
  getHistoryProduct,
  deleteHistory,
  getAllHistoryData
} = require('../controller/c_payment')

router.get('/', getAllHistoryData)
router.post('/', paymentProduct)
router.get('/:id', getHistoryProduct)
router.delete('/', deleteHistory)

module.exports = router
