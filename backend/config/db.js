const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.getConnection((err, connection) => {
  if (err) {
    // log the error and again retry to connect
    console.log("Database connection failed");
  }

  if (connection) {
    console.log("Database connected");
    connection.release();
  }

  // auto restart

  return;
});

module.exports = db;
