const db = require("../config/db");

const Donor = {
  create: (name, date, area, blood_group, callback) => {
    const sql =
      "INSERT INTO donor (name, date, area, blood_group) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, date, area, blood_group], callback);
  },
  findAll: (callback) => {
    const sql = "SELECT * FROM donor";
    db.query(sql, callback);
  },
  update: (id, name, date, area, blood_group, callback) => {
    const sql =
      "UPDATE donor SET name = ?, date = ?, area = ?, blood_group = ? WHERE id = ?";
    db.query(sql, [name, date, area, blood_group, id], callback);
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM donor WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Donor;
