const express = require('express')
const router = express.Router()
const { deleteUser, addUser } = require('../controllers/postGreSql/user')
const {
  addMembers,
  deleteMembers
} = require('../controllers/postGreSql/member')

router.route('/user/add').post(addUser)
router.route('/user/delete/:id').delete(deleteUser)
router.route('/members/add').post(addMembers)
router.route('/members/delete/:id').delete(deleteMembers)
module.exports = router
