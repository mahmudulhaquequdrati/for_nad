const db = require("../config/db");

const Track = {
  create: (donor_id, callback) => {
    const sql = "INSERT INTO TrackDonor (donor_id) VALUES (?)";
    db.query(sql, [donor_id], callback);
  },
  findAll: (callback) => {
    const sql = "SELECT * FROM TrackDonor";
    db.query(sql, callback);
  },
  findByDonor: (donor_id, callback) => {
    const sql = "SELECT * FROM TrackDonor WHERE donor_id = ?";
    db.query(sql, [donor_id], callback);
  },
};

module.exports = Track;
