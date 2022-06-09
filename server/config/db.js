const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.0.2",
  port: "1111",
  user: "username",
  password: "********",
  database: "mydatabase",

});

module.exports = db;
