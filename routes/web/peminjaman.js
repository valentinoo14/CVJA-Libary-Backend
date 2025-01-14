const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const peminajamnControllers = require ("../../controllers/peminjamanControllers")

// Routes
route.get("/", peminajamnControllers.getAllLoans);
route.get("/:id", peminajamnControllers.getLoanById);
route.post("/", peminajamnControllers.addLoan);
route.put("/:id", peminajamnControllers.updateLoan);
route.delete("/:id", peminajamnControllers.deleteLoan);

module.exports = route ;


