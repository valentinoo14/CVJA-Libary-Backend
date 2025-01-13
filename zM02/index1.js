// import modul express
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const connection = require("../zM02/db1");

// membuat instance express
const app = express();
const port = 3001;

// handler untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// multer untuk upload file
// Middleware untuk menangani form-data
const formdata = multer();

// define route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route user
  // ambil data dari json body.
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM tbl_users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

  // kirim data dari json body.
app.post("/pengguna", (req, res) => {
  connection.query("INSERT INTO tbl_users SET ?", (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});


  //storage.none() digunakan untuk terima form-data multipart
app.post("/users-formdata", formdata.none(), (req, res) => {
  res.send(req.body);
});
     // formdata.none() adalah metode dari Multer, middleware Node.js untuk menangani form-data multipart.
     // Multipart/form-data adalah format yang biasa digunakan oleh formulir HTML untuk mengunggah file atau data kombinasi (file + teks).
     // none() digunakan ketika Anda hanya ingin menerima teks dari formulir multipart/form-data tanpa file.
     // Data teks ini akan tersedia dalam req.body.
  
// mengambil data customer
app.get("/customers", (req, res) => {
  connection.query("select * from tbl_users", (err, result) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.json({data: result})
    }
  })
});

// mengambil data customer berdasarkan id Namun, tabel tbl_users tidak memiliki data buku, sehingga diperlukan query kedua untuk mendapatkan data buku yang terkait.
app.get("/customers/:id", (req, res) => {
  const id = req.params.id //1
  connection.query(`SELECT * FROM tbl_users WHERE id = ?`, [id], (err, result) => {
    if(err) {
      res.status(400).send("err")
    } else {
       // jika berhasil saya berharap ambil semua data buku yang sesuai dengan id buku dan id user
       connection.query(`select * FROM tbl_buku where idbuku = ${result[0].idbuku} and iduser= ${id}`, (err, result) => {
        if(err) {
           res.status(400).send(err)
         } else {
           res.json({data: result})
         }
      })
    }
  })
})

app.post("/customers", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO tbl_users SET ?", [data], (err, result) => {
    if(err) {
      res.status(400).send(err)
    } else {
      if(result.affectedRows === 1) {
        res.json({msg: "Success"})
      } else {
        res.json({msg: "not success"})
      }
    }
  })


    // contoh dengan placeholder
  const name = req.body.name1
  
  const query = `INSERT INTO Customers (CustomerName, ContactName, Address City, PostalCode, Country) VALUES (?, ?, ?, ?,?,?)`

  connection.query(query, [name,b,c,d,e,f], (err, result) => {
    if(err) {
      res.status(400).send(err)
    } else {
      if(result.affectedRows === 1) {
        res.json({msg: "Success"})
      } else {
        res.json({msg: "not success"})
      }
    }
  })
})

// tambahkan data customer
// mengirimkan kembali data ke client tanpa penambahan dan updateçç
app.post("/product", formdata.none(), (req, res) => {
  const kumpulandata = req.body;
  //tampilkan data user dengan id = 1
  res.json({ data: kumpulandata });
});

// route query
app.get("/users/detail", (req, res) => {
  const jk = req.query.jk;
  const hobby = req.query.hobby;
});

// M11

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});