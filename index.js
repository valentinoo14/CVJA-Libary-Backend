// import modul express
const express = require('express');
const allRoutes = require("./routes/web");

// membuat instance express
const app = express();
const port = 3000;

// Gunakan middleware bod-parser
// handler untuk parsing data
app.use(express.json());  // Untuk mengurai JSON body
app.use(express.urlencoded({ extended: true }));  // Untuk mengurai form data

// memdaftarkan path /api/v1 sebagai prefix endpoint untuk semua routes
// yang didefensikan dalam allRoutes
app.use("/api/v1", allRoutes);

// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});