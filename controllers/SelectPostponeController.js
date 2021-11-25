const {
  getAllAppointment,
  getDateChange,
} = require("../models/AppointmentModel");
const { getTime } = require("../models/TimeTableModel");

module.exports = { getAllAppointment, getDateChange,getTime };
