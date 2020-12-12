const helper = require('../helper/reponse')
const {
  getHistoryCount,
  postHistoryData,
  postHistoryDetail,
  getAllDetailData
} = require('../model/payment_model')

module.exports = {
  paymentProduct: async (req, res) => {
    try {
      const data = req.body
      const newData = []
      const dataPrice = data.map((x) => x.product_price * x.quantity)
      console.log(dataPrice[1])
      const totalPrice = (x, y) => x + y
      const dataSubtotal = dataPrice.reduce(totalPrice)
      const total = await getHistoryCount()
      const historyData = {
        history_invoice: 'KKS-' + (total + 1),
        history_subtotal: dataSubtotal,
        history_status: 1
      }
      const historyId = await postHistoryData(historyData)
      for (let i = 0; i < data.length; i++) {
        newData[i] = {
          product_id: data[i].product_id,
          history_detail_quantity: data[i].quantity,
          history_detail_price: dataPrice[i],
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
  }
}
