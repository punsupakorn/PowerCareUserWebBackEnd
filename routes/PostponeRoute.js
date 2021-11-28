const express = require("express");
const router = express.Router();
const {
  getAppointmentWithAccessToken,
  getUserFromLineUserId,
} = require("../controllers/PostponeController");

router.get("/user/:accesstoken", async (req, res) => {
  const { accesstoken } = req.params;
  let result = await getUserFromLineUserId(accesstoken);
  res.send(result);
});

router.get("/:accesstoken", async (req, res) => {
  const { accesstoken } = req.params;
  let result = await getAppointmentWithAccessToken(accesstoken);
  console.log(result)
  res.send(result);
});

module.exports = router;
