const {
  getCategoryModel,
  getCategoryByIdModel
} = require('../model/category_model')
const helper = require('../helper/reponse')

module.exports = {
  getCategory: async (req, res) => {
    try {
      const result = await getCategoryModel()
      return helper.response(res, 200, 'Success Get Product', result)
    } catch (error) {
      return helper.response(res, 400, 'Data Not Found', error)
    }
  },
  getCategoryByID: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getCategoryByIdModel(id)
      if (result.length > 0) {
        return helper.response(res, 200, `Success Get Data By Id ${id}`, result)
      } else {
        return helper.response(res, 404, 'Id Not Found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Data Not Found', error)
    }
  }
}
