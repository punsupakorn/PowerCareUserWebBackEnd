const express = require("express");
const router = express.Router();
const { deleteAppointment } = require("../controllers/CancelController");

router.post("/", async (req, res) => {
    const AppointmentID = req.body.AppointmentID;
    const TimeTableID = req.body.TimeTableID;
    const Time = req.body.Time;
    // console.log("Data : ", AppointmentID, TimeTableID, Time);
    let result = await deleteAppointment(AppointmentID, TimeTableID, Time);
    console.log("result :", result);
    res.send(result);
  });

module.exports = router;
