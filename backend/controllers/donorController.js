const Donor = require("../models/Donor");
const Track = require("../models/Track");

exports.getDonors = (req, res) => {
  Donor.findAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createDonor = (req, res) => {
  const { name, date, area, blood_group } = req.body;
  Donor.create(name, date, area, blood_group, (err, result) => {
    if (err) throw err;
    // add a row in TrackDonor table
    Track.create(result.insertId, (err, result) => {
      if (err) throw err;

      res.status(201).send("Donor created");
    });
  });
};

exports.updateDonor = (req, res) => {
  const { id, name, date, area, blood_group } = req.body;
  Donor.update(id, name, date, area, blood_group, (err, result) => {
    if (err) throw err;
    res.status(200).send("Donor updated");
  });
};

exports.deleteDonor = (req, res) => {
  const { id } = req.params;
  Donor.delete(id, (err, result) => {
    if (err) throw err;
    res.status(200).send("Donor deleted");
  });
};
