const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const penggunaControllers = require ("../../controllers/penggunaControllers")

// Routes
// Routes
route.get("/", penggunaControllers.getAllUsers);
route.get("/:id", penggunaControllers.getUserById);
route.post("/", penggunaControllers.addUser);
route.put("/:id", penggunaControllers.updateUser);
route.delete("/:id", penggunaControllers.deleteUser);

module.exports = route ;
