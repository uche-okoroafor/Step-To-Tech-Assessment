const user = require('../../models/user')
const asyncHandler = require('express-async-handler')

// @route POST/user
// @desc Add user to mysql database
// @access public

exports.addUser = asyncHandler(async (req, res, next) => {
  const { username, email, address, occupation } = req.body
  const inputData = {
    username,
    email,
    address,
    occupation
  }
  user.add(inputData, function (data) {
    if (data.affectedRows === 1) {
      return res.status(200).json({ success: true })
    }

    res.status(500)
    throw new Error('something went wrong')
  })
})

// @route DELETE/user
// @desc remove user from mysql database
// @access public

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const deleteId = req.params.id

  user.delete(deleteId, function (data) {
    if (data) {
      return res.status(200).json({ success: true })
    }

    res.status(500)
    throw new Error('something went wrong')
  })
})
