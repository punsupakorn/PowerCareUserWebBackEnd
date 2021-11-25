const { db } = require("../config/firebase-config");
const axios = require("axios");

/////create/////
const addUser = async (
  FirstName,
  LastName,
  DateOfBirth,
  Sex,
  Address,
  Phone,
  Email,
  accessToken
) => {
  const UserRef = db.collection("User").doc();
  const profile = await axios.get(`https://api.line.me/v2/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  await db.collection("User").doc(UserRef.id).set({
    UserID: UserRef.id,
    FirstName: FirstName,
    LastName: LastName,
    DateOfBirth: DateOfBirth,
    Sex: Sex,
    Address: Address,
    Phone: Phone,
    Email: Email,
    LineUserId: profile.data.userId,
  });
};

/////read/////
const decryptAccessToken = async (accessToken) => {
  try {
    const uid = await axios.get(`https://api.line.me/v2/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log("uid : ", uid.data.userId);
    const id = uid.data.userId;
    return id;
  } catch (error) {
    return false;
  }
};

const checkUser = async (accessToken) => {
  const data = await decryptAccessToken(accessToken);
  const userRef = db.collection("User");
  const query = await userRef.where("LineUserId", "==", data).get();
  if (query.empty) {
    return false;
  } else {
    return true;
  }
};

const getUserFromLineUserId = async (accessToken) => {
  try {
    console.log("Model: ",accessToken)
    const userArr = [];
    const uid = await axios.get(`https://api.line.me/v2/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userRef = db.collection("User");
    const query = await userRef
      .where("LineUserId", "==", uid.data.userId)
      .get();
    query.forEach((doc) => {
      userArr.push(doc.data());
    });
    return userArr[0];
  } catch (error) {
    // console.log(error);
    //return error;
  }
};

/////update/////
const editUserProfile = async (
  UserId,
  FirstName,
  LastName,
  Sex,
  Address,
  Phone,
  Email
) => {
  try {
    const userRef = db.collection("User").doc(UserId);
    await userRef.update({
      FirstName: FirstName,
      LastName: LastName,
      Sex: Sex,
      Address: Address,
      Phone: Phone,
      Email: Email,
    });
  } catch (error) {
    return error;
  }
};

/////delete/////

module.exports = { addUser, checkUser, getUserFromLineUserId, editUserProfile };
