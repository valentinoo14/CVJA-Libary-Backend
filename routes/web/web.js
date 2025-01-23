// const express = require("express");
// const app = express();
// // import semua route mahasiswa dari file mahasiswa.js
// const bukuRoutes = require("./buku");
// const peminjamanRoutes = require("./peminjaman");
// const penggunaRoutes = require("./pengguna");
// const authRoutes = require("./auth_routes")

// // memdaftarkan path sebagai endpoint untuk semua routes dari mahasiswa
// app.use("/buku", bukuRoutes);
// app.use("/peminjaman", peminjamanRoutes);
// app.use("/pengguna", penggunaRoutes);
// app.use("/auth", authRoutes);

// //ekspor app agar semua routes yang ada pada file ini
// // bisa di akases dari luar
// module.exports = app;

const express = require("express");
const app = express();

// Import routes lainnya
const bukuRoutes = require("../../routes/web/buku")
const peminjamanRoutes = require("../../routes/web/peminjaman");
const penggunaRoutes = require("../../routes/web/pengguna");
const authRoutes = require("../../routes/web/auth_routes");

// Daftarkan route dengan app.use()
app.use("/buku", bukuRoutes);           // Route untuk buku
app.use("/peminjaman", peminjamanRoutes); // Route untuk peminjaman
app.use("/pengguna", penggunaRoutes);     // Route untuk pengguna
app.use("/auth", authRoutes);            // Route untuk auth

// Ekspor app agar bisa digunakan di index.js
module.exports = app;

