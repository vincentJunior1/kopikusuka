const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routesNavigation = require('./src/routesNavigation')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routesNavigation)
app.get('*', (req, res) => {
  res.status(404).send('path not found')
})

app.listen(3000, () => {
  console.log('express is listening on port 3000')
})
