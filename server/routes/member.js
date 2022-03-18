const express = require('express')
const router = express.Router()
const {

  validateConnectionRequest,
  validateRejectConnectionRequest,
  validateAddUserToCompany,
  validateRemoveConnection,
  validateRemoveUser
} = require('../validator/validateParams')
const {
  addMember,
  deleteMember,
} = require('../controllers/member')


router.route('/add').post(addMember)
router.route('/delete').delete(deleteMember)


module.exports = router
