const express = require("express");
const router = express.Router();
const { editAppointment } = require("../controllers/PostponeConfirmController");

router.put("/", async (req, res) => {
  const {
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
  } = req.body;
  let result = await editAppointment(
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime
  );

  res.send(result);
});

module.exports = router;
