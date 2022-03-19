const members = require('../../models/members')
const asyncHandler = require('express-async-handler')

// @route POST/members
// @desc Add members to mysql database
// @access public

exports.addMembers = asyncHandler(async (req, res, next) => {
  const { name, email, address, occupation } = req.body
  const inputData = {
    name,
    email,
    address,
    occupation
  }
  members.add(inputData, function (data) {
    if (data.affectedRows === 1) {
      return res.status(200).json({ success: true })
    }

    res.status(500)
    throw new Error('something went wrong')
  })
})

// @route DELETE/members
// @desc remove members from mysql database
// @access public
exports.deleteMembers = asyncHandler(async (req, res, next) => {
  const deleteId = req.params.id

  members.delete(deleteId, function (data) {
    if (data) {
      return res.status(200).json({ success: true })
    }

    res.status(500)
    throw new Error('something went wrong')
  })
})
