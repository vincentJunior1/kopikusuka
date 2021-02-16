const helper = require('../helper/reponse')
const {
  getDataInvoicePermonth,
  getDataInvoicePeryear,
  getDataInvoiceInterval,
  countAllInvoiceToday,
  getDataInvoiceIntervalPerWeek,
  getDataInvoicePerDay
} = require('../model/dashboard_model')

module.exports = {
  getDataChart: async (req, res) => {
    try {
      const invoiceMonth = await getDataInvoicePermonth()
      const invoiceYear = await getDataInvoicePeryear()
      const intervalInvoice = await getDataInvoiceInterval()
      const invoicePerweek = await getDataInvoiceIntervalPerWeek()
      const invoicePerday = await getDataInvoicePerDay()
      const getAllInvoiceToday = await countAllInvoiceToday()
      const allInvoice = {
        invoiceYear,
        invoiceMonth,
        intervalInvoice,
        invoicePerweek,
        invoicePerday,
        getAllInvoiceToday
      }
      return helper.response(
        res,
        200,
        'Success Get Data Invoice This Month',
        allInvoice
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 404, 'Data Not Found', error)
    }
  }
}
