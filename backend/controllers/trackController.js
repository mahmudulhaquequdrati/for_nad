const Track = require("../models/Track");

exports.getAllTackings = (req, res) => {
  Track.findAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getTracksByDonor = (req, res) => {
  const donor_id = req.params.donor_id;
  Track.findByDonor(donor_id, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createTrack = (req, res) => {
  const { donor_id } = req.body;
  Track.create(donor_id, (err, result) => {
    if (err) throw err;
    res.status(201).send("Tracking added successfully!");
  });
};
