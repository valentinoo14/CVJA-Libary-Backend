const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const peminjamanControllers = require ("../../controllers/peminjamanControllers")

// Routes
route.get("/", peminjamanControllers.pjmGetAll);
route.get("/:id", peminjamanControllers.pjmGetId);
route.post("/", peminjamanControllers.pjmCreate);
route.put("/:id", peminjamanControllers.pjmUpdate);
route.delete("/:id", peminjamanControllers.pjmDelete);

module.exports = route ;