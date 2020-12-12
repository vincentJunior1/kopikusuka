const helper = require('../helper/reponse')
const {
  getHistoryCount,
  postHistoryData,
  postHistoryDetail,
  getAllDetailData,
  getHistoryByIdModel,
  deleteHistoryStatusModel,
  getHistoryDetailModel,
  getAllHistoryDataModel
} = require('../model/payment_model')

module.exports = {
  paymentProduct: async (req, res) => {
    try {
      const data = req.body
      const newData = []
      const allData = data.slice(1, data.length)
      const dataPrice = allData.map((x) => x.product_price * x.quantity)
      const totalPrice = (x, y) => x + y
      const dataSubtotal = dataPrice.reduce(totalPrice)
      const total = await getHistoryCount()
      const historyData = {
        history_invoice: 'KKS-' + (total + 1),
        history_tax: data[0].history_tax,
        history_delivery_price: data[0].delivery_price,
        history_subtotal:
          dataSubtotal + data[0].history_tax + data[0].delivery_price,
        history_status: 1,
        payment_method_id: data[0].payment_method
      }
      console.log(historyData)
      const historyId = await postHistoryData(historyData)
      for (let i = 0; i < allData.length; i++) {
        newData[i] = {
          product_id: allData[i].product_id,
          history_detail_quantity: allData[i].quantity,
          history_detail_price: dataPrice[i],
          size_id: allData[i].size_id,
          history_detail_status: 1,
          history_id: historyId
        }
        await postHistoryDetail(newData[i])
      }
      const result = await getAllDetailData(historyId)
      return helper.response(res, 200, 'Product Will Be processes', result)
    } catch (error) {
      return helper.response(res, 400, 'Failed Buy Product', error)
    }
  },
  getAllHistoryData: async (req, res) => {
    try {
      const result = await getAllHistoryDataModel()
      return helper.response(res, 200, 'Success Get All Data History', result)
    } catch (error) {
      return helper.response(res, 400, 'Internal Issue', error)
    }
  },
  getHistoryProduct: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getHistoryDetailModel(id)
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
  }
}
