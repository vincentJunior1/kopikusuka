const multer = require('multer')
const helper = require('../helper/reponse')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/cupon/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})

const maxSize = 2 * 2000 * 2000

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
    // console.log('true')
  } else {
    cb(new Error('File type must be jpeg or png'), false)
    // console.log('false')
  }
}
const upload = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter
}).single('cupon_image')

const uploadFilter = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return helper.response(res, 400, err.message)
    } else if (err) {
      return helper.response(res, 400, err.message)
    }
    console.log(req.body)
    next()
    // Everything went fine.
  })
}

module.exports = uploadFilter
