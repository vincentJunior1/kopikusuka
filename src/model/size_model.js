const connection = require('../config/mysql')

module.exports = {
  getAllSizeModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM size LEfT JOIN category ON size.category_id = category.category_id',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getAllDelivery: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM delivery_method', (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
