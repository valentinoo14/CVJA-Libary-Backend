const express = require("express");
const app = express();
// import semua route mahasiswa dari file mahasiswa.js
const bukuRoutes = require("../routes/web/buku");
const peminjamanRoutes = require("../routes/web/peminjaman");
const penggunaRoutes = require("../routes/web/pengguna");
const authRoutes = require("../routes/web/auth_routes")

// memdaftarkan path sebagai endpoint untuk semua routes dari mahasiswa
app.use("/buku", bukuRoutes);
app.use("/peminjaman", peminjamanRoutes);
app.use("/pengguna", penggunaRoutes);
app.use("/auth", authRoutes);

//ekspor app agar semua routes yang ada pada file ini
// bisa di akases dari luar
module.exports = app;
