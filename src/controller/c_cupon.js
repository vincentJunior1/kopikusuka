const {
  getCuponModel,
  postCuponModel,
  updateCuponModel,
  getCuponById,
  deleteCuponModel
} = require('../model/cupon_model')
const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/reponse')
const fs = require('fs')

module.exports = {
  getCupon: async (req, res) => {
    try {
      const result = await getCuponModel()
      client.setex('getcupon:', 3600, JSON.stringify(result))
      return helper.response(res, 200, 'Success Get Data', result)
    } catch (error) {
      return helper.response(res, 400, 'Cupon Not Found', error)
    }
  },
  postCupon: async (req, res) => {
    try {
      const {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_price,
        cupon_status,
        size_id,
        delivery_method_id,
        cupon_code,
        cupon_started_at,
        cupon_ended_at,
        category_id
      } = req.body

      const setData = {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_price,
        cupon_image: req.file === undefined ? '' : req.file.filename,
        cupon_status,
        size_id,
        delivery_method_id,
        cupon_code,
        cupon_started_at,
        cupon_ended_at,
        category_id
      }
      const result = await postCuponModel(setData)
      return helper.response(res, 200, 'Cupon Has Been Created', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Cupon Not Found', error)
    }
  },
  updateCupon: async (req, res) => {
    try {
      const { id } = req.params
      const {
        cupon_name,
        cupon_price,
        cupon_code,
        cupon_started_at,
        cupon_ended_at,
        cupon_discount,
        cupon_description
      } = req.body
      console.log('jalan')
      const setData = {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_price,
        cupon_code,
        cupon_started_at,
        cupon_ended_at,
        cupon_updated_at: new Date()
      }
      const checkId = await getCuponById(id)
      if (req.file === undefined) {
        if (checkId.length <= 0) {
          return helper.response(res, 404, 'Cupon Not Found')
        } else {
          const newData = {
            ...setData,
            ...{ cupon_image: checkId[0].product_image }
          }
          const result = await updateCuponModel(newData, id)
          return helper.response(res, 200, 'Cupon Has Been Updated', result)
        }
      } else {
        if (checkId.length <= 0) {
          return helper.response(res, 404, 'Cupon Not Found')
        } else {
          if (checkId[0].cupon_image === '') {
            const newData = {
              ...setData,
              ...{ cupon_image: req.file.filename }
            }
            const result = await updateCuponModel(newData, id)
            return helper.response(res, 200, 'Cupon Has Been Updated', result)
          } else {
            fs.unlink(
              './uploads/cupon/' + checkId[0].cupon_image,
              async (err) => {
                if (err) {
                  console.log(err)
                  return helper.response(res, 400, 'Failed Change Image Cupon')
                } else {
                  const newData = {
                    ...setData,
                    ...{ cupon_image: req.file.filename }
                  }
                  const result = await updateCuponModel(newData, id)
                  return helper.response(
                    res,
                    200,
                    'Cupon Has Been Updated',
                    result
                  )
                }
              }
            )
          }
        }
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Update Cupon', error)
    }
  },
  deleteCupon: async (req, res) => {
    try {
      const { id } = req.params
      const checkId = await getCuponById(id)
      console.log('ok')
      if (checkId.length <= 0) {
        return helper.response(res, 404, 'Cupon Not Found')
      } else {
        const newData = {
          ...checkId[0],
          ...{ cupon_image: '', cupon_status: 0 }
        }
        if (checkId[0].cupon_image === '') {
          await deleteCuponModel(newData, id)
          return helper.response(res, 200, 'Success Delete Data')
        } else {
          fs.unlink(
            './uploads/cupon/' + checkId[0].cupon_image,
            async (err) => {
              if (err) {
                return helper.response(res, 400, 'Failed Delete Image')
              } else {
                await deleteCuponModel(newData, id)
                return helper.response(res, 200, 'Success Delete Data')
              }
            }
          )
        }
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Delete Cupon', error)
    }
  },
  getCuponById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getCuponById(id)
      client.setex(`getcuponbyid:${id}`, 3600, JSON.stringify(result))
      return helper.response(res, 200, ' Success Get Data Cupon', result)
    } catch (error) {
      return helper.response(res, 404, 'Cupon Not Found', error)
    }
  }
}
