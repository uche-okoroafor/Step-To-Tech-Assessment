const Member = require('../models/Member')
const asyncHandler = require('express-async-handler')

// @route POST /create/company
// @desc create company profile
// @access Private
exports.addMember = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ success: true })

  res.status(500)
  throw new Error('Unable to perform this operation.please,try again later')
})

// @route GET /fetch/companies
// @desc fetch all the companies from database
// @access Private

exports.deleteMember = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ success: true })

  res.status(500)
  throw new Error('Unable to perform this operation.please,try again later')
})
