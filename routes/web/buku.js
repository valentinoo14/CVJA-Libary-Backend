const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const bukuControllers = require ("../../controllers/bukuControllers");

route.get("/", bukuControllers.getAllBuku);
route.get("/:id", bukuControllers.getOneBuku);
route.post("/", bukuControllers.getAllBuku);
route.update("/:id", bukuControllers.getAllBuku);
route.delete("/:id", bukuControllers.getAllBuku);

module.exports = route ;
