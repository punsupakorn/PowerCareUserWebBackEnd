const { getUserFromLineUserId } = require("../models/UserModel");
const { getAppointmentWithAccessToken } = require("../models/AppointmentModel");
module.exports = { getAppointmentWithAccessToken,getUserFromLineUserId };
