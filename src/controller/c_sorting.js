const helper = require('../helper/reponse')
const {
  getProductCountModel,
  getProductByCategory
} = require('../model/sorting_model')
const qs = require('querystring')

module.exports = {
  getProductByCategory: async (req, res) => {
    try {
      const { id } = req.params
      let { page, limit } = req.query

      page = parseInt(page)
      const totalData = await getProductCountModel(id)
      const totalPage = Math.ceil(totalData / limit)
      const offSet = page * limit - limit
      console.log(offSet)
      const prevLink =
        page > 1 ? qs.stringify({ ...req.query, ...{ page: page - 1 } }) : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...req.query, ...{ page: page + 1 } })
          : null

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink: nextLink && `http://localhost:3000/product?${nextLink}`,
        prevLink: prevLink && `http://localhost:3000/product?${prevLink}`
      }
      const result = await getProductByCategory(id, limit, offSet)
      return helper.response(res, 200, 'Success Get Product', result, pageInfo)
    } catch (error) {
      return helper.response(res, 404, 'Data Not Found', error)
    }
  }
}
