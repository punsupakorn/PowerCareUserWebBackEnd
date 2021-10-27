const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
} = require("../controllers/AppointmentController");

router.get("/", async (req, res) => {
  let result = await getDateInTimeTable();
  // console.log("result : ", result);
  res.send(result);
});

router.post("/name", async (req, res) => {
  const Date = req.body.Date;
  let result = await getDoctorInChooseDate(Date);
  // console.log("result : ", result);
  res.send(result);
});

router.post("/time", async (req, res) => {
  const TimeTableID = req.body.TimeTableID;
  let result = await getTimeSlot(TimeTableID);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
