const mysql = require("mysql");

// Connect to MySQL database
// const connection = mysql.createConnection({
//   host: 'db5011360555.hosting-data.io:3306',
//   user: 'dbu2741303',
//   password: 'Ag1l1ty@537621',
//   database: 'dbs9588707'
// });

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "isshounhi",
});

database.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + database.threadId);
  database.query("CREATE DATABASE IF NOT EXISTS isshounhi", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    database.query(`create table if not exists user(
        id int primary key auto_increment,
        email varchar(255) not null UNIQUE,
        first_name varchar(255) null ,
        last_name varchar(255) null,
        password varchar(255) null,
        created_date DATE , 
        token varchar(255) null
    )`, function (err, result) {
        if (err) throw err;
        console.log("users table created");
      });   
  });

});

module.exports = database;
