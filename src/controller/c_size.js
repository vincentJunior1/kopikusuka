const helper = require('../helper/reponse')
const { getAllSizeModel } = require('../model/size_model')

module.exports = {
  getSize: async (req, res) => {
    try {
      const result = await getAllSizeModel()
      return helper.response(res, 200, 'Seccess Get All Size', result)
    } catch (error) {
      return helper.response(res, 200, 'Seccess Get All Size', error)
    }
  }
}
