const router = require('express').Router()
const { authorization } = require('../middleware/auth')
const {
  paymentProduct,
  getHistoryProduct,
  deleteHistory,
  getAllHistoryData
} = require('../controller/c_payment')

router.get('/', authorization, getAllHistoryData)
router.post('/', authorization, paymentProduct)
router.get('/:id', authorization, getHistoryProduct)
router.delete('/', authorization, deleteHistory)

module.exports = router
