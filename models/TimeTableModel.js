const { db } = require("../config/firebase-config");

///// read /////
const getTimeTable = async () => {
  try {
    const timeTable = db.collection("TimeTable");
    const snapshotTimeTable = await timeTable.get();
    const arr = [];

    await snapshotTimeTable.forEach((doc) => {
      arr.push(doc.data());
    });

    return arr;
  } catch (error) {
    console.log(error);
  }
};

const getDateInTimeTable = async () => {
  try {
    const AllDateArr = [];
    // const DateArr = [];
    const timetableRef = db.collection("TimeTable");
    const snapshot = await timetableRef.get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      const date = data.Date;
      AllDateArr.sort().push(date);
    });
    const filter = [...new Set(AllDateArr)];
    return filter;
  } catch (error) {
    return error;
  }
};

const getDoctorInChooseDate = async (Date) => {
  try {
    const DoctorArr = [];
    const timetableRef = db.collection("TimeTable");
    const query = await timetableRef.where("Date", "==", Date).get();
    if (query.empty) {
      return false;
    } else {
      query.forEach((doc) => {
        const data = doc.data();
        DoctorArr.push({
          Name: data.DoctorName,
          DocumentID: data.DoctorID,
          TimeTableID: data.TimeTableID,
        });
      });
    }
    return DoctorArr;
  } catch (error) {
    return error;
  }
};

const getTimeSlot = async (TimeTableID) => {
  try {
    const timetableRef = db.collection("TimeTable").doc(TimeTableID);
    const doc = await timetableRef.get();
    const data = doc.data();
    const time = data.Time;
    return time;
  } catch (error) {}
};

const getTime = async (TimeTableID) => {
  try {
    // const TimeArr = [];
    const timetableRef = db.collection("TimeTable").doc(TimeTableID);
    const doc = await timetableRef.get();
    const data = doc.data();
    const time = data.Time;
    return time.sort();
  } catch (error) {
    return error;
  }
};

module.exports = {
  getTimeTable,
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
  getTime,
};
