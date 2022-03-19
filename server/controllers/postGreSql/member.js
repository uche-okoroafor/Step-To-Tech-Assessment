const pool = require('../../database/postGreSqlDB/postgreSqlDB')
const asyncHandler = require('express-async-handler')

exports.addMembers = asyncHandler(async (req, res, next) => {
  const { name, email, address, occupation } = req.body

  pool.query(
    'INSERT INTO members (name, email,address,occupation) VALUES ($1, $2,$3, $4)',
    [name, email, address, occupation],
    (error, results) => {
      if (error) {
        console.log(
          '🚀 ~ file: member.js ~ line 12 ~ exports.addMembers=asyncHandler ~ error',
          error
        )

        res.status(500)
        throw new Error('something went wrong')
      }
      return res.status(201).json({ success: true, results })
    }
  )
})

exports.deleteMembers = asyncHandler(async (req, res, next) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM members WHERE id = $1', [id], (error, results) => {
    if (error) {
      res.status(500)
      throw new Error('something went wrong')
    }
    return res.status(201).json({ success: true })
  })
})
