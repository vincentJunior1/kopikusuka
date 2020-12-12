const connection = require('../config/mysql')

module.exports = {
  getHistoryCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) as total FROM history',
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  postHistoryData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', data, (error, result) => {
        !error ? resolve(result.insertId) : reject(error)
      })
    })
  },
  postHistoryDetail: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO history_detail SET ?',
        data,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getAllDetailData: (historyId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT 
        product.product_name,history.history_invoice,history_detail.history_detail_quantity,product.product_price,history_detail.history_detail_price 
        FROM history_detail 
        LEFT JOIN history ON history_detail.history_id = history.history_id 
        LEFT JOIN product ON history_detail.product_id = product.product_id 
        WHERE history_detail.history_id = ${historyId}`,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  }
}
