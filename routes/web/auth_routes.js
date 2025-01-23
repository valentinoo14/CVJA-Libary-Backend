const express = require("express");
const route = express.Router();
const { login } = require("../../controllers/auth");
const penggunaControllers = require("../../controllers/penggunaControllers");
const authenticateToken = require("../../middleware/authVerify");

route.post("/login", login);
route.get("/:id", authenticateToken, penggunaControllers.userReadById);

module.exports = route ;