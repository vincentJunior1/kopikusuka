const connection = require('../config/mysql')

module.exports = {
  getProductModel: (limit, offSet) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM product LIMIT ? OFFSET ?',
        [limit, offSet],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getProductByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM product WHERE product_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postProductModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            product_id: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  patchProductModel: (id, setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE product SET ? WHERE product_id = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: id,
              ...setData
            }
            resolve(newResult)
          } else {
            console.log(error)
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteProductModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM product WHERE product_id = ?',
        id,
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: id,
              RowHasBeenDelete: result.affctedRows
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getProductCountModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM product',
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  getProductCountNameModel: (search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM product WHERE product_name LIKE '%${search}%'`,
        (error, result) => {
          console.log(result[0])
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  getProductByNameModel: (search, limit, offSet) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product WHERE product_name LIKE '%${search}%' LIMIT ${limit} OFFSET ${offSet}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getProductNameSorting: (sorting, limit, offSet) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product ORDER BY ${sorting} ASC LIMIT ${limit} OFFSET ${offSet}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getproductByNameSortinWithPagigModel: (search, sorting, limit, offSet) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product WHERE product_name LIKE '%${search}%' ORDER BY ${sorting} ASC LIMIT ${limit} OFFSET ${offSet}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
