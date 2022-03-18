const mysql = require('mysql')

const connectDB = async () => {
  const conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })

  return conn.connect(function (err) {
    if (err) throw err
    console.log(
      `MYSQL Connected: ${conn.config.host} ${conn.config.port}`.cyan.underline
        .bold
    )

    // conn.query('CREATE DATABASE IF NOT EXISTS STEP_BY_TECH', function (
    //   err,
    //   result
    // ) {
    //   if (err) throw err
    //   console.log('Database created')

    //   // const sqlQuery = `CREATE TABLE if not exists users( id int primary key auto_increment,username VARCHAR(255) not null, occupation VARCHAR(255))`
    //   // const sqlQuery =
    //   //   "INSERT INTO user (username, occupation) VALUES ('Company Inc', 'Highway')"
    //   // const sqlQuery =
    //   //   "INSERT INTO users (username, occupation) VALUES ('Company Inc', 'Highway')"
    //   // const sqlQuery = 'DELETE FROM `users` WHERE `users`.`id` = 1'
    //   conn.query(sqlQuery, function (err, results, fields) {
    //     if (err) {
    //       console.log(err.message)
    //     }
    //   })
    // })
  })
}

module.exports = connectDB
