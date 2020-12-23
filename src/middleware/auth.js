const helper = require('../helper/reponse')
const jwt = require('jsonwebtoken')

module.exports = {
  authorization: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, 'Kepodeh', (error, result) => {
        if (
          (error && error.name === 'JsonWebTokenError') ||
          (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(res, 400, error.message)
        } else {
          console.log(result)
          req.decodeToken = result
          next()
        }
      })
    } else {
      return helper.response(res, 400, 'Please Log in first')
    }
  },
  isAdmin: (req, res, next) => {
    const { user_role, user_status } = req.decodeToken
    if (user_role === 0 || user_status === 0) {
      return helper.response(res, 400, 'Only Admin Can Access This Method')
    } else {
      next()
    }
  }
}
