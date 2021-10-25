const express = require("express");
const router = express.Router();
const { checkUser } = require("../controllers/UserProfileController");

router.get("/:accessToken", async (req, res) => {
  const accessToken = req.params;
  let result = await checkUser(accessToken);
  res.send(result);
});

module.exports = router;
