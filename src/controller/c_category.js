const {
  getCategoryModel,
  getCategoryByIdModel,
  getCategoryByNameModel
} = require('../model/category_model')
const helper = require('../helper/reponse')

module.exports = {
  getCategory: async (req, res) => {
    try {
      const { search } = req.query
      if (search === '' || !search) {
        const result = await getCategoryModel()
        return helper.response(res, 200, 'Success Get All Category', result)
      } else {
        const result = await getCategoryByNameModel(search)
        return helper.response(res, 200, 'Success Get Category Name', result)
      }
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
