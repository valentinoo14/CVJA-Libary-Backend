// import modul express
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/db');

// membuat instance express
const app = express();
const port = 3000;

// Gunakan middleware bod-parser
// handler untuk parsing data
app.use(express.json());  // Untuk mengurai JSON body
app.use(express.urlencoded({ extended: true }));  // Untuk mengurai form data

// define route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// route user
// Mengambil data dari tabel pengguna
app.get("/pengguna", (req, res) => {
    connection.query("SELECT * FROM Pengguna", (err, result) => {
      if (err) {
        res.status(404).json({
            "status": 404,
            "message": err,
          })
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});