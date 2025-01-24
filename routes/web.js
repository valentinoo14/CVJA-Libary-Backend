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

