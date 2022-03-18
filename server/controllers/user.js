const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @route GET /users
// @desc Search for users
// @access Private
exports.addUser = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ success: true })

  res.status(404)
  throw new Error('No users found in search')
})

// @route GET /users/fetch/all-users
// @desc fetch all users in the database
// @access Private

exports.deleteUser = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ success: true })
  res.status(500)
  throw new Error('something went wrong')
})
