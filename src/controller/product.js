const {
  getProductModel,
  getProductByIdModel,
  postProductModel,
  patchProductModel,
  deleteProductModel,
  getProductCountModel,
  getProductByNameModel,
  getProductCountNameModel,
  getproductByNameSortinWithPagigModel,
  getProductNameSorting
} = require('../model/product_model')
const helper = require('../helper/reponse')
const qs = require('querystring')

module.exports = {
  getProduct: async (req, res) => {
    try {
      let { page, limit, search, sort } = req.query
      limit = parseInt(limit)
      if (sort === '' || !sort) {
        if (search === '' || !search) {
          page = parseInt(page)
          const totalData = await getProductCountModel()
          const totalPage = Math.ceil(totalData / limit)
          const offSet = page * limit - limit
          const prevLink =
            page > 1
              ? qs.stringify({ ...req.query, ...{ page: page - 1 } })
              : null
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
          const result = await getProductModel(limit, offSet)
          return helper.response(
            res,
            200,
            'Success Get Product',
            result,
            pageInfo
          )
        } else {
          const totalData = await getProductCountNameModel(search)
          const totalPage = Math.ceil(totalData / limit)
          if (totalData.length > limit) {
            page = parseInt(page)
          } else {
            page = 1
          }
          const offSet = page * limit - limit
          const prevLink =
            page > 1
              ? qs.stringify({ ...req.query, ...{ page: page - 1 } })
              : null
          const nextLink =
            page < totalPage
              ? qs.stringify({ ...req.query, ...{ page: page + 1 } })
              : null

          const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            nextLink: nextLink && `http://localhost:3000/product/?${nextLink}`,
            prevLink: prevLink && `http://localhost:3000/product/?${prevLink}`
          }
          const result = await getProductByNameModel(search, limit, offSet)
          return helper.response(
            res,
            200,
            'Success Get Product With Sorting',
            result,
            pageInfo
          )
        }
      } else {
        if (search === '' || !search) {
          page = parseInt(page)
          const totalData = await getProductCountModel()
          const totalPage = Math.ceil(totalData / limit)
          const offSet = page * limit - limit
          const prevLink =
            page > 1
              ? qs.stringify({ ...req.query, ...{ page: page - 1 } })
              : null
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
          const result = await getProductNameSorting(sort, limit, offSet)
          return helper.response(
            res,
            200,
            'Success Get Product And Data is Already Sort',
            result,
            pageInfo
          )
        } else {
          const totalData = await getProductCountNameModel(search)
          const totalPage = Math.ceil(totalData / limit)
          console.log(totalData)
          if (totalData.length >= limit) {
            page = parseInt(page)
          } else {
            page = 1
          }
          const offSet = page * limit - limit
          const prevLink =
            page > 1
              ? qs.stringify({ ...req.query, ...{ page: page - 1 } })
              : null
          const nextLink =
            page < totalPage
              ? qs.stringify({ ...req.query, ...{ page: page + 1 } })
              : null

          const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            nextLink: nextLink && `http://localhost:3000/product/?${nextLink}`,
            prevLink: prevLink && `http://localhost:3000/product/?${prevLink}`
          }
          const result = await getproductByNameSortinWithPagigModel(
            search,
            sort,
            limit,
            offSet
          )
          return helper.response(
            res,
            200,
            'Success Get Product By Name And Sorting',
            result,
            pageInfo
          )
        }
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getProductByIdModel(id)
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          `Success Get Product By Id ${id}`,
          result
        )
      } else {
        return helper.response(res, 404, `Data Not Found By Id ${id}`)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  postProduct: async (req, res) => {
    try {
      const {
        category_id,
        product_name,
        product_price,
        product_status
      } = req.body

      const setData = {
        category_id,
        product_name,
        product_price,
        product_created_at: new Date(),
        product_status
      }
      const result = await postProductModel(setData)
      return helper.response(res, 200, 'Data Success Added To Databse', result)
    } catch (error) {
      return helper.response(res, 400, 'BAD METHOD', error)
    }
  },
  patchProduct: async (req, res) => {
    try {
      // console.log(req.params)
      // console.log(req.body)
      const { id } = req.params
      const {
        category_id,
        product_name,
        product_price,
        product_status
      } = req.body
      const setData = {
        category_id,
        product_name,
        product_price,
        product_updated_at: new Date(),
        product_status
      }
      const checkId = await getProductByIdModel(id)
      if (checkId.length > 0) {
        const result = await patchProductModel(id, setData)
        return helper.response(res, 200, 'Data Has Been Updated', result)
      } else {
        return helper.response(res, 404, `Data Not Found By Id ${id}`)
      }
    } catch (error) {
      return helper.response(res, 400, 'Data Failed Update', error)
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params
      const checkId = await getProductByIdModel(id)
      if (checkId.length > 0) {
        const result = await deleteProductModel(id)
        return helper.response(res, 200, 'Data Has Been Deleted', result)
      } else {
        return helper.response(res, 200, 'Data Not Fund')
      }
    } catch (error) {
      return helper.response(res, 404, 'Data Has Not Been Deleted', error)
    }
  }
}
