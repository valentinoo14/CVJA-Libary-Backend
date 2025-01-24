const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const peminjamanControllers = require ("../../controllers/peminjamanControllers")

// Routes
route.get("/", peminjamanControllers.pjmGetAll);
route.get("/:id_peminjaman", peminjamanControllers.pjmGetId);
route.post("/", peminjamanControllers.pjmCreate);
route.put("/:id_peminjaman", peminjamanControllers.pjmUpdate);
route.delete("/:id_peminjaman", peminjamanControllers.pjmDelete);

module.exports = route ;