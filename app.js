const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const routesNavigation = require('./src/routesNavigation')

app.use(cors())
app.use(morgan('dev'))
app.use('/api2', express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})
app.use('/api2', routesNavigation)
app.get('*', (req, res) => {
  res.status(404).send('path not found')
})

app.listen(process.env.PORT, () => {
  console.log('express is listening on port 3000')
})
