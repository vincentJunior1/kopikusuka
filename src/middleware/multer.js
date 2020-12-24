const multer = require('multer')
const helper = require('../helper/reponse')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
    // console.log('true')
  } else {
    cb(new Error('File type must be jpeg or png'), false)
    // console.log('false')
  }
}
const upload = multer({ storage, fileFilter }).single('product_image')

const uploadFilter = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('error')
      return helper.response(res, 400, err.message)
    } else if (err) {
      console.log('error1')
      return helper.response(res, 400, err.message)
    }
    next()
    console.log('ok')
    // Everything went fine.
  })
}

module.exports = uploadFilter
