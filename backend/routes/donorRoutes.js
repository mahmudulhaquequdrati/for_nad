const express = require("express");
const router = express.Router();
const donorController = require("../controllers/donorController");

router.get("/", donorController.getDonors);
router.post("/", donorController.createDonor);
router.put("/", donorController.updateDonor);
router.delete("/:id", donorController.deleteDonor);

module.exports = router;
