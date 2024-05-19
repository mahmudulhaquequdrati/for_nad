const express = require("express");
const router = express.Router();
const trackController = require("../controllers/trackController");

router.get("/", trackController.getAllTackings);
router.get("/donor/:donor_id", trackController.getTracksByDonor);
router.post("/", trackController.createTrack);

module.exports = router;
