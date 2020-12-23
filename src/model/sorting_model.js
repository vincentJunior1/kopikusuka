const connection = require('../config/mysql')

module.exports = {
  getProductByCategory: (id, limit, offSet) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product LEFT JOIN category ON product.category_id = category.category_id WHERE product.category_id = ${id} LIMIT ${limit} OFFSET ${offSet}`,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getProductCountModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM product LEFT JOIN category ON product.category_id = category.category_id WHERE product.category_id = ${id}`,
        id,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  }
}
