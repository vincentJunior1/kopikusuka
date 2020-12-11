const connection = require('../config/mysql')

module.exports = {
  getCategoryModel: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category', (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getCategoryByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM category WHERE category_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getCategoryByNameModel: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM category WHERE category_name = '${name}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
