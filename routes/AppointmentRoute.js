const express = require("express");
const router = express.Router();
const { getTimeTable } = require("../controllers/AppointmentController");
const { createAppointment } = require("../controllers/AppointmentController");

router.get("/", async (req, res) => {
  let result = await getTimeTable();
  res.json(result);
});

router.post("/", createAppointment);

module.exports = router;
