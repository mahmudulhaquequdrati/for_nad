const db = require("../config/db");

const Auth = {
  login: (username, password, callback) => {
    const sql = "SELECT * FROM Auth WHERE username = ? AND password = ?";
    db.query(sql, [username, password], callback);
  },

  // create: (name, username, password, callback) => {
  //   const sql = "INSERT INTO Auth (name, username, password) VALUES (?, ?, ?)";
  //   db.query(sql, [name, username, password], callback);
  // },
};

module.exports = Auth;
