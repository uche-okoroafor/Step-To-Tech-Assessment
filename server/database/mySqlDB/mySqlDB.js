const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})
conn.connect(function (err) {
  if (err) throw err
  console.log(
    `MYSQL Connected: ${conn.config.host}: ${conn.config.port}`.cyan.underline
      .bold
  )
})

// create Schema

const userTable = `CREATE TABLE if not exists user( id int primary key auto_increment,username VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`
const membersTable = `CREATE TABLE if not exists members( id int primary key auto_increment,name VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`
const teamsTable = `CREATE TABLE if not exists teams( id int primary key auto_increment,name VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`

conn.query(userTable, function (err, results, fields) {
  if (err) {
    console.log(err.message)
  }
})

conn.query(membersTable, function (err, results, fields) {
  if (err) {
    console.log(err.message)
  }
})

conn.query(teamsTable, function (err, results, fields) {
  if (err) {
    console.log(err.message)
  }
})

module.exports = conn
