const express = require("express");
const router = express.Router();
const { editAppointment } = require("../controllers/PostponeConfirmController");

router.post("/", async (req, res) => {
  const {
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    doctorname,
    symptom,
    username,
  } = req.body;
  let result = await editAppointment(
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    doctorname,
    symptom,
    username,
  );
  res.send(result);
});

module.exports = router;
