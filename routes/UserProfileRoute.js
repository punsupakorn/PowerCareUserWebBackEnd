const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/UserProfileController");

router.post("/", async (req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const DateOfBirth = req.body.DateOfBirth;
  const Sex = req.body.Sex;
  const Address = req.body.Address;
  const Phone = req.body.Phone;
  const Email = req.body.Email;
  const accessToken = req.body.accessToken;

  let result = await createUser(
    FirstName,
    LastName,
    DateOfBirth,
    Sex,
    Address,
    Phone,
    Email,
    accessToken
  );
  res.send(result);
});

module.exports = router;
