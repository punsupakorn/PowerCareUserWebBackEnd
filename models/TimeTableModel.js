const db = require("../config/firebase-config");

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

module.exports = { getTimeTable };
