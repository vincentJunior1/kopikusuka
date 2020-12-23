const bcrypt = require('bcrypt')
const helper = require('../helper/reponse')
const jwt = require('jsonwebtoken')
const { registerUserModel, getDataUserEmail } = require('../model/user_model')
module.exports = {
  registerUser: async (req, res) => {
    try {
      const {
        user_name,
        user_email,
        user_password,
        user_role,
        user_status
      } = req.body
      if (
        user_name === '' ||
        user_email === '' ||
        user_password === '' ||
        user_role === '' ||
        user_status === ''
      ) {
        return helper.response(res, 400, 'Please Input every field')
      } else {
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        const setData = {
          user_name,
          user_email,
          user_password: encryptPassword,
          user_role,
          user_status
        }
        const cekEmail = await getDataUserEmail(user_email)
        if (cekEmail.length >= 1) {
          return helper.response(res, 400, 'Email Is Registred')
        } else {
          const result = await registerUserModel(setData)
          return helper.response(res, 200, 'Success Add User', result)
        }
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  loginUser: async (req, res) => {
    try {
      const { user_email, user_password } = req.body
      const dataUser = await getDataUserEmail(user_email)
      if (dataUser.length > 0) {
        // cek password
        const password = bcrypt.compareSync(
          user_password,
          dataUser[0].user_password
        )
        if (password) {
          const {
            user_id,
            user_name,
            user_email,
            user_role,
            user_status
          } = dataUser[0]
          const payload = {
            user_id,
            user_name,
            user_email,
            user_role,
            user_status
          }
          const token = jwt.sign(payload, 'Kepodeh', { expiresIn: '3h' })
          const result = { ...payload, token }
          return helper.response(res, 200, 'Success Log in ', result)
        } else {
          return helper.response(res, 400, 'Password Wrong')
        }
      } else {
        return helper.response(res, 400, 'Email Not Registed')
      }
    } catch (error) {
      return helper.response(res, 404, 'user Not Found', error)
    }
  }
}
