const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root", //sesuaikan dengan user database anda
  password: "", //sesuaikan dengan password database anda
  database: "CVJA_Libary",
});

// uji koneksi
// connection.connect ((err) => {
//     if (err){
//         console.error('Koneksi ke database gagal:', err);
//     } else {
//         console.log('Koneksi ke database berhasil:');
//     }
// });

module.exports = connection;

// const mysql = require('mysql2/promise');

// // Membuat koneksi ke database menggunakan mysql2/promise
// async function connectDatabase() {
//     try {
//         const connection = await mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'cvja_libary'
//         });
//         console.log("Koneksi ke database berhasil");
//         return connection;  // mengembalikan objek koneksi
//     } catch (err) {
//         console.error("Koneksi ke database gagal:", err);
//     }
// }

// // Menjalankan fungsi connectDatabase
// connectDatabase();