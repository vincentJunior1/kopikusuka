const {
  getProductModel,
  getProductByIdModel,
  postProductModel,
  patchProductModel,
  getProductCountModel,
  getProductByNameModel,
  getProductCountNameModel,
  getproductByNameSortinWithPagigModel,
  getProductNameSorting
} = require('../model/product_model')
const helper = require('../helper/reponse')
const qs = require('querystring')
const redis = require('redis')
const fs = require('fs')
const client = redis.createClient()

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
          const newData = {
            result,
            pageInfo
          }
          client.setex(
            `getproduct:${JSON.stringify(req.query)}`,
            3600,
            JSON.stringify(newData)
          )
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
        client.setex(`getproductbyid:${id}`, 3600, JSON.stringify(result))
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
        product_desc,
        product_status
      } = req.body

      const setData = {
        category_id,
        product_name,
        product_price,
        product_desc,
        product_image: req.file === undefined ? '' : req.file.filename,
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
        product_desc,
        size_id,
        product_status
      } = req.body
      const setData = {
        category_id,
        product_name,
        product_price,
        product_desc,
        size_id,
        product_updated_at: new Date(),
        product_status
      }
      const checkId = await getProductByIdModel(id)
      if (req.file === undefined) {
        console.log('here')
        if (checkId.length > 0) {
          const newData = {
            ...setData,
            ...{ product_image: checkId[0].product_image }
          }
          const result = await patchProductModel(id, newData)
          return helper.response(res, 200, 'Data Has Been Updated', result)
        } else {
          return helper.response(res, 404, `Data Not Found By Id ${id}`)
        }
      } else {
        if (checkId.length > 0) {
          const newData = {
            ...setData,
            ...{ product_image: req.file.filename }
          }
          fs.unlink('./uploads/' + checkId[0].product_image, async (err) => {
            if (err) {
              return helper.response(res, 400, 'Data Failed Update')
            } else {
              const result = await patchProductModel(id, newData)
              return helper.response(res, 200, 'Data Has Been Updated', result)
            }
          })
        } else {
          return helper.response(res, 404, `Data Not Found By Id ${id}`)
        }
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
        const newData = {
          ...checkId[0],
          ...{ product_status: 0 }
        }
        fs.unlink('./uploads/' + newData.product_image, (err, next) => {
          if (err) {
            console.log('oke')
            return helper.response(res, 400, 'Failed Delete Image', err)
          } else {
            patchProductModel(id, newData)
            return helper.response(res, 200, 'Data Has Been Deleted')
          }
        })
      } else {
        return helper.response(res, 404, 'Data Not Fund')
      }
    } catch (error) {
      return helper.response(res, 404, 'Data Has Not Been Deleted', error)
    }
  }
}
