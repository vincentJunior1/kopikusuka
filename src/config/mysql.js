const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beginer_backend',
  timezone: 'UTC'
})

connection.connect((error) => {
  if (error) {
    throw error
  } else {
    console.log('You Are Connected')
  }
})

module.exports = connection
