const express = require("express");
const router = express.Router();
const {
  getUserFromLineUserId,
  editUserProfile,
} = require("../controllers/EditUserProfileController");

router.post("/", async (req, res) => {
  const { accessToken } = req.body;
  let result = await getUserFromLineUserId(accessToken);
  // console.log(result);
  res.send(result);
});

router.put("/", async (req, res) => {
  const UserId = req.body.UserId;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Sex = req.body.Sex;
  const Address = req.body.Address;
  const Phone = req.body.Phone;
  const Email = req.body.Email;
  let result = await editUserProfile(
    UserId,
    FirstName,
    LastName,
    Sex,
    Address,
    Phone,
    Email
  );
  res.send(result);
});

module.exports = router;
