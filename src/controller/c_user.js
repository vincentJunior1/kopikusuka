const bcrypt = require('bcrypt')
const helper = require('../helper/reponse')
const jwt = require('jsonwebtoken')
const {
  registerUserModel,
  getDataUserEmail,
  getDataUserModel,
  patchUserData
} = require('../model/user_model')
const fs = require('fs')
module.exports = {
  registerUser: async (req, res) => {
    try {
      const {
        user_name,
        user_email,
        user_password,
        user_role,
        user_status,
        user_firstname,
        user_lastname,
        user_address,
        user_gender,
        user_birthday,
        user_phone
      } = req.body
      if (
        user_email === '' ||
        user_password === '' ||
        user_status === '' ||
        user_phone === ''
      ) {
        return helper.response(res, 400, 'Please Input every field')
      } else {
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        const setData = {
          user_name,
          user_email,
          user_firstname,
          user_lastname,
          user_address,
          user_gender,
          user_birthday,
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
            user_address,
            user_phone,
            user_image,
            user_firstname,
            user_lastname,
            user_gender,
            user_birthday,
            user_role,
            user_status
          } = dataUser[0]
          const payload = {
            user_id,
            user_name,
            user_email,
            user_address,
            user_phone,
            user_image,
            user_firstname,
            user_lastname,
            user_gender,
            user_birthday,
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
  },
  patchProfile: async (req, res) => {
    try {
      const { user_id } = req.decodeToken
      const {
        user_name,
        user_email,
        user_firstname,
        user_lastname,
        user_address,
        user_gender,
        user_birthday
      } = req.body
      const setData = {
        user_name,
        user_email,
        user_firstname,
        user_lastname,
        user_address,
        user_gender,
        user_birthday: new Date(user_birthday),
        user_updated_at: new Date()
      }
      console.log('ok')
      if (req.file === undefined) {
        const dataUser = await getDataUserModel(user_id)
        if (dataUser.length === 0) {
          console.log('error 1')
          return helper.response(res, 404, 'Data Not Found')
        } else {
          const newData = {
            ...dataUser[0],
            ...setData
          }
          const result = await patchUserData(newData, user_id)
          return helper.response(res, 200, 'Success Edit Profile', result)
        }
      } else {
        const dataUser = await getDataUserModel(user_id)
        if (dataUser.length < 0) {
          return helper.response(res, 404, 'Data Not Found')
        } else {
          if (dataUser[0].user_image === '') {
            const newData = {
              ...dataUser[0],
              ...setData,
              ...{ user_image: req.file.filename }
            }
            const result = await patchUserData(newData, user_id)
            return helper.response(res, 200, 'Success Edit Profile', result)
          } else {
            fs.unlink('./uploads/' + dataUser[0].user_image, async (err) => {
              if (err) {
                console.log('data Error')
                return helper.response(res, 404, 'Data Not Found')
              } else {
                const newData = {
                  ...dataUser[0],
                  ...setData,
                  ...{ user_image: req.file.filename }
                }
                const result = await patchUserData(newData, user_id)
                return helper.response(res, 200, 'Success Edit Profile', result)
              }
            })
          }
        }
      }
    } catch (error) {
      return helper.response(res, 400, 'Failed Update Profile', error)
    }
  }
}
