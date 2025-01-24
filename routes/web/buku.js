const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const bukuControllers = require ("../../controllers/bukuControllers");

route.get("/", bukuControllers.GetBuku);
route.get("/:id_buku", bukuControllers.GetIdBuku);
route.post("/", bukuControllers.CreateBuku);
route.put("/:id_buku", bukuControllers.UpdateBuku);
route.delete("/:id_buku", bukuControllers.DeleteBuku);

module.exports = route ;
