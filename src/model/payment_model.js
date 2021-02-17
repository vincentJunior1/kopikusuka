const connection = require('../config/mysql')

module.exports = {
  getHistoryCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) as total FROM history',
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  postHistoryData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', data, (error, result) => {
        !error ? resolve(result.insertId) : reject(error)
      })
    })
  },
  postHistoryDetail: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO history_detail SET ?',
        data,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getAllDetailData: (historyId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM history_detail WHERE history_id = ${historyId}`,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getHistoryByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history_detail WHERE history_detail_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  deleteHistoryStatusModel: (newData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE history_detail SET ? WHERE history_detail_id = ?',
        [newData, id],
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getHistoryDetailModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM history_detail LEFT JOIN history ON history_detail.history_id = history.history_id WHERE history_detail.history_id = ${id}`,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getAllHistoryDataModel: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * 
            FROM history_detail 
            LEFT JOIN history ON history_detail.history_id = history.history_id 
            LEFT JOIN user ON history.user_id = user.user_id
            WHERE history.user_id = ${user_id} AND history_detail_status = 1 AND history.history_status = 0`,
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  },
  getAllOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history LEFT JOIN user ON history.user_id = user.user_id WHERE history_status = 1',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getOrderById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history WHERE history_id = ? AND history_status = 1',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  markAsDoneModel: (newData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE history SET ? WHERE history_id = ?',
        [newData, id],
        (error, result) => {
          !error ? resolve(result) : reject(error)
        }
      )
    })
  }
}
