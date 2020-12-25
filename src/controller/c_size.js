const helper = require('../helper/reponse')
const redis = require('redis')
const client = redis.createClient()
const { getAllSizeModel } = require('../model/size_model')

module.exports = {
  getSize: async (req, res) => {
    try {
      const result = await getAllSizeModel()
      client.setex('getsize', 3600, JSON.stringify(result))
      return helper.response(res, 200, 'Seccess Get All Size', result)
    } catch (error) {
      return helper.response(res, 200, 'Seccess Get All Size', error)
    }
  }
}
