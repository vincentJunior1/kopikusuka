const helper = require('../helper/reponse')
const {
  getDataInvoicePermonth,
  getDataInvoicePeryear,
  getDataInvoiceInterval,
  countAllInvoiceToday
} = require('../model/dashboard_model')

module.exports = {
  getDataChart: async (req, res) => {
    try {
      const invoiceMonth = await getDataInvoicePermonth()
      const invoiceYear = await getDataInvoicePeryear()
      const intervalInvoice = await getDataInvoiceInterval()
      const getAllInvoiceToday = await countAllInvoiceToday()
      const allInvoice = {
        invoiceYear,
        invoiceMonth,
        intervalInvoice,
        getAllInvoiceToday
      }
      return helper.response(
        res,
        200,
        'Success Get Data Invoice This Month',
        allInvoice
      )
    } catch (error) {
      return helper.response(res, 404, 'Data Not Found', error)
    }
  }
}
