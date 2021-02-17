const router = require('express').Router()
const { authorization, isAdmin } = require('../middleware/auth')
const {
  getHistoryDataRedis,
  clearDataHistoryRedis,
  getHistoryDataByIdRedis
} = require('../middleware/redis')
const {
  paymentProduct,
  getHistoryProduct,
  deleteHistory,
  getAllHistoryData,
  getAllOrder,
  markAsDone
} = require('../controller/c_payment')

router.get('/allhistory', authorization, getHistoryDataRedis, getAllHistoryData)
router.post('/', authorization, clearDataHistoryRedis, paymentProduct)
router.get(
  '/detail/:id',
  authorization,
  getHistoryDataByIdRedis,
  getHistoryProduct
)
router.delete(
  '/deletehistory/:id',
  authorization,
  clearDataHistoryRedis,
  deleteHistory
)

router.get('/order/', authorization, isAdmin, getAllOrder)
router.delete('/orderdone/:id', authorization, isAdmin, markAsDone)

module.exports = router
