const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE
})

pool.connect(function (err) {
  if (err) throw err
  console.log(
    `POSTGRESQL Connected: ${pool.host}: ${pool.port}`.cyan.underline.bold
  )
})

const userTable = `CREATE TABLE if not exists users( id serial not null primary key,username VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`
const membersTable = `CREATE TABLE if not exists members( id serial not null primary key,name VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`
const teamsTable = `CREATE TABLE if not exists teams( id serial not null primary key,name VARCHAR(255),email VARCHAR(255),address VARCHAR(255), occupation VARCHAR(255))`

pool.query(userTable, function (err, res) {
  if (err) {
    console.log(err.message)
  }
})
pool.query(membersTable, function (err, res) {
  if (err) {
    console.log(err.message)
  }
})
pool.query(teamsTable, function (err, res) {
  if (err) {
    console.log(err.message)
  }
})

module.exports = pool
