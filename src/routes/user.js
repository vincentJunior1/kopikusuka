const router = require('express').Router()
const {
  registerUser,
  loginUser,
  patchProfile
} = require('../controller/c_user')
const { authorization } = require('../middleware/auth')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/editProfile', authorization, patchProfile)

module.exports = router
