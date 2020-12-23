const connection = require('../config/mysql')

module.exports = {
  registerUserModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', setData, (error, result) => {
        console.log(error)
        if (!error) {
          const newResult = {
            user_id: result.insertId,
            ...setData
          }
          delete newResult.user_password
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getDataUserEmail: (user_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT user_id,user_name,user_email,user_password,user_role, user_status FROM user WHERE user_email = '${user_email}'`,
        user_email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
