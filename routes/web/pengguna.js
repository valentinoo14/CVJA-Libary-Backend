const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const penggunaControllers = require ("../../controllers/penggunaControllers");
const authenticateToken = require("../../middleware/authVerify");

// Routes
route.get("/", authenticateToken, penggunaControllers.userGet);
route.get("/:id", authenticateToken, penggunaControllers.userGetId);
route.post("/", authenticateToken, penggunaControllers.userCreate);
route.put("/:id", authenticateToken, penggunaControllers.userUpdate);
route.delete("/:id", authenticateToken, penggunaControllers.userDelete);

module.exports = route ;
