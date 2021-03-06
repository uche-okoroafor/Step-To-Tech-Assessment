const db = require('../database/mySqlDB/mySqlDB')
module.exports = {
  add: function (inputData, callback) {
    const sql = 'INSERT INTO user SET ?'
    db.query(sql, inputData, function (err, data) {
      if (err) throw err
      return callback(data)
    })
  },

  delete: function (deleteId, callback) {
    const sql = 'DELETE FROM user WHERE id = ?'
    db.query(sql, [deleteId], function (err, data) {
      if (err) throw err
      return callback(data)
    })
  }
}
