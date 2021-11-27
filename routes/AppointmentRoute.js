const express = require("express");
const router = express.Router();
const {
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
} = require("../controllers/AppointmentController");
const { checkeExistAppoitment } = require("../models/AppointmentModel");

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

router.get("/check/:accessToken", async (req, res) => {
  const accessToken = req.params;
  let result = await checkeExistAppoitment(accessToken);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
