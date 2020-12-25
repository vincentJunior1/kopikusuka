const helper = require('../helper/reponse')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getProductByIdRedis: (req, res, next) => {
    const { id } = req.params
    client.get(`getproductbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log('data ada di dalam redis')
        return helper.response(
          res,
          200,
          `Success Get Product By Id ${id}`,
          JSON.parse(result)
        )
      } else {
        console.log('data tidak ada dalam redis')
        next()
      }
    })
  },
  getProductRedis: (req, res, next) => {
    client.get(`getproduct:${JSON.stringify(req.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        console.log(error)
        return helper.response(
          res,
          200,
          'Success Get Product',
          newResult.result,
          newResult.pageInfo
        )
      } else {
        next()
      }
    })
  },
  getCuponRedis: (req, res, next) => {
    client.get('getcupon', (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(res, 200, 'Success Get Product', newResult)
      } else {
        next()
      }
    })
  },
  clearDataProductRedis: (req, res, next) => {
    client.keys('getproduct*', (_error, result) => {
      if (result.length > 0) {
        result.forEach((value) => {
          client.del(value)
        })
      }
      next()
    })
  },
  clearDataCuponRedis: (req, res, next) => {
    client.keys('getcupon*', (_error, result) => {
      if (result.length > 0) {
        result.forEach((value) => {
          client.del(value)
        })
      } else {
        next()
      }
    })
  }
}
