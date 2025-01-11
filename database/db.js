const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //sesuaikan dengan user database anda
  password: "", //sesuaikan dengan password database anda
  database: "CVJA_Libary",
});

// uji koneksi
connection.connect ((err) => {
    if (err){
        console.error('Koneksi ke database gagal:', err);
    } else {
        console.log('Koneksi ke database berhasil:');
    }
});

module.exports = connection;