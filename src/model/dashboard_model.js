const connection = require('../config/mysql')

module.exports = {
  getDataInvoicePermonth: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(history_subtotal) as month_invoice from `history` WHERE MONTH(history_created_at) = MONTH(NOW())',
        (error, result) => {
          !error ? resolve(result[0].month_invoice) : reject(new Error(error))
        }
      )
    })
  },
  getDataInvoicePeryear: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(history_subtotal) as month_invoice from `history` WHERE YEAR(history_created_at) = YEAR(NOW())',
        (error, result) => {
          !error ? resolve(result[0].month_invoice) : reject(new Error(error))
        }
      )
    })
  },
  getDataInvoiceInterval: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(history_subtotal) as invoice_interval,MONTH(history_created_at) as history_created_at FROM `history` WHERE YEAR(history_created_at) = YEAR(NOW()) GROUP BY MONTH(history_created_at)',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataInvoiceIntervalPerWeek: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(history_subtotal) as invoice_perweek, WEEK(history_created_at) as history_created_at FROM`history` WHERE MONTH(history_created_at) = MONTH(NOW()) GROUP BY WEEK(history_created_at)',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataInvoicePerDay: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(history_subtotal) as invoice_perweek, DATE(history_created_at) as history_created_at FROM`history` WHERE WEEK(history_created_at) = WEEK(NOW()) GROUP BY DaTE(history_created_at)',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  countAllInvoiceToday: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) as total_invoice FROM `history` WHERE DATE(history_created_at)= DATE(now())',
        (error, result) => {
          !error ? resolve(result[0].total_invoice) : reject(new Error(error))
        }
      )
    })
  }
}
