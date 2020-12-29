const router = require('Express').Router()
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

router.get('/', authorization, getHistoryDataRedis, getAllHistoryData)
router.post('/', authorization, clearDataHistoryRedis, paymentProduct)
router.get('/:id', authorization, getHistoryDataByIdRedis, getHistoryProduct)
router.delete('/', authorization, clearDataHistoryRedis, deleteHistory)

module.exports = router
