const helper = require('../helper/reponse')
const redis = require('redis')
const client = redis.createClient()
const {
  getHistoryCount,
  postHistoryData,
  postHistoryDetail,
  getAllDetailData,
  getHistoryByIdModel,
  deleteHistoryStatusModel,
  getHistoryDetailModel,
  getAllHistoryDataModel,
  getAllOrder,
  getOrderById,
  markAsDoneModel
} = require('../model/payment_model')

module.exports = {
  paymentProduct: async (req, res) => {
    try {
      const data = req.body
      const { user_id } = req.decodeToken
      const newData = []
      const allData = data.slice(1, data.length)
      const total = await getHistoryCount()
      const historyData = {
        history_invoice: 'KKS-' + (total + 1),
        history_tax: data[0].history_tax,
        history_delivery_price: data[0].delivery_price,
        history_subtotal: data[0].history_total,
        history_status: 1,
        payment_method_id: data[0].payment_method,
        user_id
      }
      const historyId = await postHistoryData(historyData)
      for (let i = 0; i < allData.length; i++) {
        newData[i] = {
          product_name: allData[i].product_name,
          history_detail_quantity: allData[i].history_detail_quantity,
          history_detail_price: allData[i].product_price,
          size_product: allData[i].history_size,
          history_detail_status: 1,
          history_id: historyId
        }
        await postHistoryDetail(newData[i])
      }
      const result = await getAllDetailData(historyId)
      return helper.response(res, 200, 'Product Will Be processes', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Failed Buy Product', error)
    }
  },
  getAllHistoryData: async (req, res) => {
    try {
      const { user_id } = req.decodeToken
      const result = await getAllHistoryDataModel(user_id)
      client.setex('gethistorydata', 3600, JSON.stringify(result))
      return helper.response(res, 200, 'Success Get All Data History', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Internal Issue', error)
    }
  },
  getHistoryProduct: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getHistoryDetailModel(id)
      client.setex(`gethistorydatabyid:${id}`, 3600, JSON.stringify(result))
      return helper.response(res, 200, 'Success Get Data History', result)
    } catch (error) {
      return helper.response(res, 404, 'Data Not Found', error)
    }
  },
  deleteHistory: async (req, res) => {
    try {
      const { id } = req.params
      const getData = await getHistoryByIdModel(id)
      if (getData <= 0) {
        return helper.response(res, 404, 'History Not Found')
      } else {
        const newData = {
          ...getData[0],
          history_detail_status: 0
        }
        await deleteHistoryStatusModel(newData, id)
        return helper.response(res, 200, 'Success Delete History User')
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Delete History', error)
    }
  },
  getAllOrder: async (req, res) => {
    try {
      const order = await getAllOrder()
      return helper.response(res, 200, 'Success Get All Order', order)
    } catch (error) {
      return helper.response(res, 400, 'Something Wrong', error)
    }
  },
  markAsDone: async (req, res) => {
    try {
      const { id } = req.params
      const order = await getOrderById(id)
      if (order.length > 0) {
        const newData = {
          ...order[0],
          ...{ history_status: 0 }
        }
        const result = await markAsDoneModel(newData, id)
        return helper.response(res, 200, 'Order Has Finished', result)
      } else {
        return helper.response(res, 404, 'Order Already Done / Order Not Found')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Something Wrong', error)
    }
  }
}
