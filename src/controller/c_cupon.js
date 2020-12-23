const {
  getCuponModel,
  postCuponModel,
  updateCuponModel,
  getCuponById,
  deleteCuponModel
} = require('../model/cupon_model')
const helper = require('../helper/reponse')

module.exports = {
  getCupon: async (req, res) => {
    try {
      const result = await getCuponModel()
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
        cupon_status
      } = req.body

      const setData = {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_status
      }
      const result = await postCuponModel(setData)
      return helper.response(res, 200, 'Cupon Has Been Created', result)
    } catch (error) {
      return helper.response(res, 400, 'Cupon Not Found', error)
    }
  },
  updateCupon: async (req, res) => {
    try {
      const { id } = req.params
      const {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_status
      } = req.body

      const newData = {
        cupon_name,
        cupon_discount,
        cupon_description,
        cupon_updated_at: new Date(),
        cupon_status
      }

      const checkId = await getCuponById(id)
      if (checkId.length <= 0) {
        return helper.response(res, 404, 'Cupon Not Found')
      } else {
        const result = await updateCuponModel(newData, id)
        return helper.response(res, 200, 'Cupon Has Been Updated', result)
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Update Cupon', error)
    }
  },
  deleteCupon: async (req, res) => {
    try {
      const { id } = req.params
      const checkId = await getCuponById(id)
      console.log(checkId)
      if (checkId.length <= 0) {
        return helper.response(res, 404, 'Cupon Not Found')
      } else {
        const newData = {
          ...checkId[0],
          cupon_status: 0
        }
        await deleteCuponModel(newData, id)
        return helper.response(res, 200, 'Success Delete Data')
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Delete Cupon', error)
    }
  },
  getCuponById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getCuponById(id)
      return helper.response(res, 200, ' Success Get Data Cupon', result)
    } catch (error) {
      return helper.response(res, 404, 'Cupon Not Found', error)
    }
  }
}
