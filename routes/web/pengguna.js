const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const penggunaControllers = require ("../../controllers/penggunaControllers");
const authenticateToken = require("../../middleware/authVerify");

// Routes
route.get("/", penggunaControllers.userGet);
route.get("/:id_pengguna", authenticateToken, penggunaControllers.userGetId);
route.post("/", authenticateToken, penggunaControllers.userCreate);
route.put("/:id_pengguna", authenticateToken, penggunaControllers.userUpdate);
route.delete("/:id_pengguna", authenticateToken, penggunaControllers.userDelete);

module.exports = route ;
