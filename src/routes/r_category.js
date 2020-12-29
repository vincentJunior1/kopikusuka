const router = require('express').Router()
const {
  getCategoryRedis,
  getCategoryByIdRedis
} = require('../middleware/redis')
const { getCategory, getCategoryByID } = require('../controller/c_category')

router.get('/', getCategoryRedis, getCategory)
router.get('/:id', getCategoryByIdRedis, getCategoryByID)

module.exports = router
