const router = require('express').Router()
const { authorization } = require('../middleware/auth')
const {
  getHistoryDataRedis,
  clearDataHistoryRedis,
  getHistoryDataByIdRedis
} = require('../middleware/redis')
const {
  paymentProduct,
  getHistoryProduct,
  deleteHistory,
  getAllHistoryData
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

module.exports = router
