const { db, FieldValue } = require("../config/firebase-config");
const axios = require("axios");
const { json } = require("express");

///// crate /////
const addAppointment = async (
  DoctorID,
  DoctorName,
  Date,
  Time,
  TimeTableID,
  UserID,
  UserName,
  Initial_Symtoms,
  AccessToken
) => {
  const name = `${UserName.firstname} ${UserName.lastname}`;
  const uid = await axios.get(`https://api.line.me/v2/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });
  const appointmentRef = db.collection("Appointment").doc();
  await db.collection("Appointment").doc(appointmentRef.id).set({
    AppointmentID: appointmentRef.id,
    DoctorID: DoctorID,
    DoctorName: DoctorName,
    Date: Date,
    Time: Time,
    TimeTableID: TimeTableID,
    UserID: UserID,
    UserName: name,
    Initial_Symptoms: Initial_Symtoms,
    LineUserId: uid.data.userId,
    Status : "ดำเนินการ"
  });

  const timetableRef = db.collection("TimeTable").doc(TimeTableID);
  await timetableRef.update({
    Time: FieldValue.arrayRemove(Time),
  });
};

///// read /////

///// update /////

///// delete /////

module.exports = { addAppointment };
