const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/UserProfileController");

router.post("/", createUser);

module.exports = router;
