const connectDB = require('../db')
module.exports = {
  createData: function (inputData, callback) {
    var sql = 'INSERT INTO crud SET ?'
    connectDB.query(sql, inputData, function (err, data) {
      if (err) throw err
      return callback(data)
    })
  }
}
