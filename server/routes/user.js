const express = require('express')
const router = express.Router()
const { addUser, deleteUser } = require('../controllers/user')

router.route('/add').post(addUser)
router.route('/delete').delete(deleteUser)

module.exports = router
