const {
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
} = require("../models/TimeTableModel");
const { addAppointment } = require("../models/AppointmentModel");

const createAppointment = async (UserID, DoctorName, Symptom, Date, Time) => {
  try {
    await addAppointment(UserID, DoctorName, Symptom, Date, Time);
    res.status(200).send("created appointment !");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  createAppointment,
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
};
