const { db, FieldValue } = require("../config/firebase-config");
const axios = require("axios");
const { json } = require("express");
const { app } = require("firebase-admin");
const {
  AppointmentConfirm,
  client,
} = require("./../linepushmessage/pushmessage");

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
  const AppointmentArr = [];
  const appointmentref = db.collection("Appointment");
  const query = await appointmentref
    .where("LineUserId", "==", uid.data.userId)
    .get();
  if (query.empty) {
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
      Status: "รอดำเนินการ",
    });
    let Status = "รอดำเนินการ";
    client
      .pushMessage(
        uid.data.userId,
        AppointmentConfirm(
          name,
          Initial_Symtoms,
          Date,
          Time,
          DoctorName,
          Status
        )
      )
      .then(() => {
        console.log("done");
      })
      .catch((err) => {
        // error handling
        console.log("send message error: ", err);
      });
    const timetableRef = db.collection("TimeTable").doc(TimeTableID);
    await timetableRef.update({
      Time: FieldValue.arrayRemove(Time),
    });
  } else {
    query.forEach((doc) => {
      AppointmentArr.push(doc.data());
    });
  }
  const data = !Object.values(AppointmentArr).some(
    (data) => data.Status == "รอดำเนินการ" || data.Status == "รอพบแพทย์"
  );
  if (data == false) {
    return "exist";
  } else {
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
      Status: "รอดำเนินการ",
    });
    let Status = "รอดำเนินการ";
    client
      .pushMessage(
        uid.data.userId,
        AppointmentConfirm(
          name,
          Initial_Symtoms,
          Date,
          Time,
          DoctorName,
          Status
        )
      )
      .then(() => {
        console.log("done");
      })
      .catch((err) => {
        // error handling
        console.log("send message error: ", err);
      });
    const timetableRef = db.collection("TimeTable").doc(TimeTableID);
    await timetableRef.update({
      Time: FieldValue.arrayRemove(Time),
    });
  }
};

///// read /////
const getAppointmentWithAccessToken = async (accessToken) => {
  try {
    const arr = [];
    const uid = await axios.get(`https://api.line.me/v2/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const appointmentRef = db.collection("Appointment");
    const query = await appointmentRef
      .where("LineUserId", "==", uid.data.userId)
      .get();
    query.forEach((doc) => {
      arr.push(doc.data());
    });
    if (arr[0] == undefined) {
      return "empty";
    } else {
      return arr[0];
    }
  } catch (error) {
    return false;
  }
};

const getAllAppointment = async () => {
  try {
    const appointment = db.collection("Appointment");
    const snapshot = await appointment.get();
    const arr = [];
    // const User = [];
    // const Doctor = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   const userRef = await db.collection("User").doc(element.UserID).get();
    //   User.push(userRef.data());
    //   const DoctorRef = await db
    //     .collection("Doctor")
    //     .doc(element.DoctorID)
    //     .get();
    //   Doctor.push(DoctorRef.data());
    // }
    // return { arr, User, Doctor };
    return arr;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getDateChange = async (DoctorID) => {
  try {
    const DateArr = [];
    const timetableRef = db.collection("TimeTable");
    const query = await timetableRef.where("DoctorID", "==", DoctorID).get();

    query.forEach((doc) => {
      const data = doc.data();
      const date = data.Date;
      const id = data.TimeTableID;
      DateArr.sort().push({ Date: date, TimeTableID: id });
    });

    const filter = [...new Set(DateArr)];
    return filter;
  } catch (error) {
    return error;
  }
};

///// update /////
const editAppointment = async (
  AppointmentID,
  OldTimeTableID,
  NewTimeTableID,
  Date,
  OldTime,
  NewTime
) => {
  const appointmentRef = db.collection("Appointment").doc(AppointmentID);
  const oldtimetableRef = db.collection("TimeTable").doc(OldTimeTableID);
  const newtimetableRef = db.collection("TimeTable").doc(NewTimeTableID);
  try {
    await appointmentRef.update({
      Time: NewTime,
      Date: Date,
      TimeTableID: NewTimeTableID,
    });

    await newtimetableRef.update({
      Time: FieldValue.arrayRemove(NewTime),
    });

    await oldtimetableRef.update({ Time: FieldValue.arrayUnion(OldTime) });
  } catch (error) {
    return error;
  }
};

///// delete /////
const deleteAppointment = async (AppointmentID, TimeTableID, Time) => {
  try {
    await db.collection("Appointment").doc(AppointmentID).delete();
    const timtableRef = db.collection("TimeTable").doc(TimeTableID);
    await timtableRef.update({ Time: FieldValue.arrayUnion(Time) });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  addAppointment,
  getAppointmentWithAccessToken,
  getAllAppointment,
  getDateChange,
  editAppointment,
  deleteAppointment,
};
