// // import konfigurasi database untuk menjalan query
// const db = require("../database/db");

// // mendefinisikan controller get all untuk Peminjaman
// const getAllPeminjaman = (req, res) => {
//     const query = `
//       SELECT peminjaman.id_peminjaman, peminjaman.tanggal_peminjaman, peminjaman.tanggal_pengembalian, buku.judul_buku, pengguna.nama_panjang
//       FROM Peminjaman peminjaman
//       INNER JOIN Buku buku ON peminjaman.id_buku = buku.id_buku
//       INNER JOIN Pengguna pengguna ON peminjaman.id_pengguna = pengguna.id_pengguna`;
//     db.query(query, [], (err, result) => {
//       if (err) {
//         res.status(400).json({
//           message: "get peminjaman gagal",
//           serverMessage: err,
//         });
//       } else {
//         res.status(200).json({
//           message: "get peminjaman berhasil",
//           peminjaman: result,
//         });
//       }
//     });
//   };
  
//   // mendefinisikan controller get by id untuk Peminjaman
//   const getPeminjamanById = (req, res) => {
//     const { id } = req.params;
//     const query = "SELECT * FROM Peminjaman WHERE id_peminjaman = ?";
//     db.query(query, [id], (err, result) => {
//       if (err) {
//         res.status(400).json({
//           message: "get peminjaman by id gagal",
//           serverMessage: err,
//         });
//       } else if (result.length === 0) {
//         res.status(404).json({
//           message: "peminjaman tidak ditemukan",
//         });
//       } else {
//         res.status(200).json({
//           message: "get peminjaman by id berhasil",
//           peminjaman: result[0],
//         });
//       }
//     });
//   };
  
//   // mendefinisikan controller add peminjaman
//   const addPeminjaman = (req, res) => {
//     const { tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna } = req.body;
//     const query = "INSERT INTO Peminjaman (tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna) VALUES (?, ?, ?, ?)";
//     db.query(query, [tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna], (err, result) => {
//       if (err) {
//         res.status(400).json({
//           message: "tambah peminjaman gagal",
//           serverMessage: err,
//         });
//       } else {
//         res.status(201).json({
//           message: "tambah peminjaman berhasil",
//         });
//       }
//     });
//   };
  
//   // mendefinisikan controller update peminjaman
//   const updatePeminjaman = (req, res) => {
//     const { id } = req.params;
//     const { tanggal_peminjaman, tanggal_pengembalian } = req.body;
//     const query = "UPDATE Peminjaman SET tanggal_peminjaman = ?, tanggal_pengembalian = ? WHERE id_peminjaman = ?";
//     db.query(query, [tanggal_peminjaman, tanggal_pengembalian, id], (err, result) => {
//       if (err) {
//         res.status(400).json({
//           message: "update peminjaman gagal",
//           serverMessage: err,
//         });
//       } else if (result.affectedRows === 0) {
//         res.status(404).json({
//           message: "peminjaman tidak ditemukan",
//         });
//       } else {
//         res.status(200).json({
//           message: "update peminjaman berhasil",
//         });
//       }
//     });
//   };
  
//   // mendefinisikan controller delete peminjaman
//   const deletePeminjaman = (req, res) => {
//     const { id } = req.params;
//     const query = "DELETE FROM Peminjaman WHERE id_peminjaman = ?";
//     db.query(query, [id], (err, result) => {
//       if (err) {
//         res.status(400).json({
//           message: "hapus peminjaman gagal",
//           serverMessage: err,
//         });
//       } else if (result.affectedRows === 0) {
//         res.status(404).json({
//           message: "peminjaman tidak ditemukan",
//         });
//       } else {
//         res.status(200).json({
//           message: "hapus peminjaman berhasil",
//         });
//       }
//     });
//   };
  
//   module.exports = { getAllPeminjaman, getPeminjamanById, addPeminjaman, updatePeminjaman, deletePeminjaman };
  

const express = require('express')
const server = express()
const peminjamanConnection = require('../models/peminjaman_models')

//controllers create
async function pjmCreate(req, res) {
    const {tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna} = req.body
    try{
        const hasil = await peminjamanConnection.peminjamanCreate(tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna)
        res.status(201).json(hasil)
    } catch(err){
        res.status(201).json({
            Message: "gagal create peminjaman",
            err: err
        })
    }
}
//controllers get all
async function pjmGetAll(req, res) {
    try{
        const hasil = await peminjamanConnection.peminjamanReadAll()
        res.status(201).json(hasil)
    } catch(err){
        res.status(500).json({
            Message: "gagal membaca data",
            err: err
        })
    }
}

//controllers get id
async function pjmGetId(req, res) {
    const id_peminjaman = req.params.id_peminjaman
    try{
        const hasil = await peminjamanConnection.peminjamanReadId(id_peminjaman)
        res.status(201).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "gagal mengambil data berdasarkan id",
            err: err
        })
    }
}

//controllers update
async function pjmUpdate(req, res) {
    const id_peminjaman = req.params.id_peminjaman
    const {tanggal_pengembalian} = req.body
    try{
        const hasil = await peminjamanConnection.peminjamanUpdate(tanggal_pengembalian, id_peminjaman)
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "gagal mengupdate peminjaman",
            err: err
        })
    }
}

//controllers delete
async function pjmDelete(req, res) {
    const id_peminjaman = req.params.id_peminjaman
    try{
        const hasil = await peminjamanConnection.peminjamanDelete(id_peminjaman)
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "gagal delete data peminjaman",
            err: err
        })
    }
}

module.exports = {
    pjmCreate,
    pjmDelete,
    pjmGetAll,
    pjmGetId,
    pjmUpdate
}