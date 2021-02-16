const router = require('express').Router()
const {
  registerUser,
  loginUser,
  patchProfile,
  confirmationEmail
} = require('../controller/c_user')
const { authorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multerUser')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/editProfile', authorization, uploadImage, patchProfile)
router.patch('/confirmationEmail/:id', confirmationEmail)

module.exports = router
