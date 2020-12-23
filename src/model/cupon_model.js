const connection = require('../config/mysql')

module.exports = {
  getCuponModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM cupon WHERE cupon_status = 1',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))``
        }
      )
    })
  },
  postCuponModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO cupon SET ?', setData, (error, result) => {
        if (!error) {
          const newData = {
            cupon_id: result.insertId,
            ...setData
          }
          resolve(newData)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getCuponById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM cupon WHERE cupon_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateCuponModel: (newData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE cupon SET ? WHERE cupon_id = ?',
        [newData, id],
        (error, result) => {
          if (!error) {
            const updateData = {
              cupon_id: id,
              ...newData
            }
            resolve(updateData)
          } else {
            console.log(error)
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteCuponModel: (newData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE cupon SET ? WHERE cupon_id = ?',
        [newData, id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
