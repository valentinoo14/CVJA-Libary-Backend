const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const bukuControllers = require ("../../controllers/bukuControllers");

route.get("/", bukuControllers.GetBuku);
route.get("/:id", bukuControllers.GetIdBuku);
route.post("/", bukuControllers.CreateBuku);
route.put("/:id", bukuControllers.UpdateBuku);
route.delete("/:id", bukuControllers.DeleteBuku);

module.exports = route ;
