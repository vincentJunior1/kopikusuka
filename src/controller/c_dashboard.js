const helper = require('../helper/reponse')
const {
  getDataInvoicePermonth,
  getDataInvoicePeryear
} = require('../model/dashboard_model')

module.exports = {
  getDataChart: async (req, res) => {
    try {
      const invoiceMonth = await getDataInvoicePermonth()
      const invoiceYear = await getDataInvoicePeryear()
      const allInvoice = {
        invoiceYear,
        invoiceMonth
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
