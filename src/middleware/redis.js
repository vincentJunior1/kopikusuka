const helper = require('../helper/reponse')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getProductByIdRedis: (req, res, next) => {
    const { id } = req.params
    client.get(`getproductbyid:${id}`, (error, result) => {
      if (!error && result != null) {
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
  getCuponByIdRedis: (req, res, next) => {
    const { id } = req.params
    client.get(`getcuponbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          res,
          200,
          `Success Get Data by id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getHistoryDataRedis: (req, res, next) => {
    client.get('getallhistorydata', (error, result) => {
      if (!error && result != null) {
        return helper.response(
          res,
          200,
          'Success Get All History Data',
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getHistoryDataByIdRedis: (req, res, next) => {
    const { id } = req.params
    client.get(`gethistorybyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          res,
          200,
          `Success Get Data by Id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getSizeRedis: (req, res, next) => {
    client.get('getsize', (error, result) => {
      if (!error && result != null) {
        return helper.response(res, 200, 'Success Get Size', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getCategoryRedis: (req, res, next) => {
    client.get(`getcategory:${JSON.stringify(req.query)}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(res, 200, 'Success get Size', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getCategoryByIdRedis: (req, res, next) => {
    const { id } = req.params
    client.get(`getcategorybyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          res,
          200,
          `Success Category By id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getSortingRedis: (req, res, next) => {
    const { id } = req.params
    client.get(
      `getsorting:${id} ${JSON.stringify(req.params)}`,
      (error, result) => {
        if (!error && result != null) {
          const newResult = JSON.parse(result)
          return helper.response(
            res,
            200,
            'Success get Data Sorting',
            newResult.result,
            newResult.pageInfo
          )
        }
      }
    )
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
        next()
      } else {
        next()
      }
    })
  },
  clearDataHistoryRedis: (req, res, next) => {
    client.keys('gethistory*', (_error, result) => {
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
