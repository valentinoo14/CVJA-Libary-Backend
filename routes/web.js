const express = require("express");
const route = express.Router();

// Import routes lainnya
const bukuRoutes = require("./web/buku")
const peminjamanRoutes = require("./web/peminjaman");
const penggunaRoutes = require("./web/pengguna");
const authRoutes = require("./web/auth_routes");


// Daftarkan route dengan app.use()
route.use("/buku", bukuRoutes);
route.use("/peminjaman", peminjamanRoutes);
route.use("/pengguna", penggunaRoutes);
route.use("/auth", authRoutes);

// Ekspor app agar bisa digunakan di index.js
module.exports = route;

