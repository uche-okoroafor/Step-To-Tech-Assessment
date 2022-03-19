const pool = require('../../database/postGreSqlDB/postgreSqlDB')
const asyncHandler = require('express-async-handler')

exports.addUser = asyncHandler(async (req, res, next) => {
  const { username, email, address, occupation } = req.body

  pool.query(
    'INSERT INTO users (username, email,address,occupation) VALUES ($1, $2,$3, $4)',
    [username, email, address, occupation],
    (error, results) => {
      if (error) {
        return res.status(500).json({ success: false, results })
      }
      return res.status(201).json({ success: true, results })
    }
  )
})

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ success: false, results })
    }
    return res.status(201).json({ success: true, results })
  })
})
