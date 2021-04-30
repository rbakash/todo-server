const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({
    path: '../config.env'
});


var devDB = mysql.createConnection({
  host:process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT, 
});

module.exports = devDB;