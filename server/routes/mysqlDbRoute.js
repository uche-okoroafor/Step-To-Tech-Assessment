const express = require('express')
const router = express.Router()

const { deleteUser, addUser } = require('../controllers/mySql/user')
const { addMembers, deleteMembers } = require('../controllers/mySql/members')

router.route('/user/add').post(addUser)
router.route('/user/delete/:id').delete(deleteUser)
router.route('/members/adds').post(addMembers)
router.route('/members/delete/:id').delete(deleteMembers)

module.exports = router
