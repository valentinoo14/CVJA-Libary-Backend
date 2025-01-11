// import modul express
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const connection = require('./database/db');

// membuat instance express
const app = express();
const port = 3000;

// Gunakan middleware bod-parser
// handler untuk parsing data
app.use(express.json());  // Untuk mengurai JSON body
app.use(express.urlencoded({ extended: true }));  // Untuk mengurai form data

// define route
// tarik data sederhana
app.get("/", (req, res) => {
    res.send("Hello World");
});

// kirim data sederhana (bodyparser)
app.post("/buku", (req, res) => {
    console.log(req.body); // Menampilkan data yang dikirim dalam body
    res.send("Data diterima");
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

// Menambah data dari tabel pengguna (bodyparse)
app.post("/pengguna", (req, res) => {  // kirim data dari json body.
    connection.query("INSERT INTO Pengguna SET ?", req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json({
            "status": 404,
            "message": err,
          })
        return;
      } else {
        res.status(201).json({
            "status": 201,
            "message": "User added successfully",
          });
      }
    })
  })

// Penggunaan package multer
app.post("/users-formdata", storage.none(), (req, res) => {  //storage.none() digunakan untuk terima form-data multipart
  res.send(req.body);
})

// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});