// import konfigurasi database untuk menjalan query
const db = require("../database/db");

// mendefinisikan controller get all untuk Buku
const getAllBuku = (req, res) => {
    const query = "SELECT * FROM Buku";
    db.query(query, [], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "get buku gagal",
          serverMessage: err,
        });
      } else {
        res.status(200).json({
          message: "get buku berhasil",
          buku: result,
        });
      }
    });
  };
  
  // mendefinisikan controller get by id untuk Buku
  const getBukuById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM Buku WHERE id_buku = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "get buku by id gagal",
          serverMessage: err,
        });
      } else if (result.length === 0) {
        res.status(404).json({
          message: "buku tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "get buku by id berhasil",
          buku: result[0],
        });
      }
    });
  };
  
  // mendefinisikan controller add buku
  const addBuku = (req, res) => {
    const { judul_buku, penerbit, kategori } = req.body;
    const query = "INSERT INTO Buku (judul_buku, penerbit, kategori) VALUES (?, ?, ?)";
    db.query(query, [judul_buku, penerbit, kategori], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "tambah buku gagal",
          serverMessage: err,
        });
      } else {
        res.status(201).json({
          message: "tambah buku berhasil",
        });
      }
    });
  };
  
  // mendefinisikan controller update buku
  const updateBuku = (req, res) => {
    const { id } = req.params;
    const { judul_buku, penerbit, kategori } = req.body;
    const query = "UPDATE Buku SET judul_buku = ?, penerbit = ?, kategori = ? WHERE id_buku = ?";
    db.query(query, [judul_buku, penerbit, kategori, id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "update buku gagal",
          serverMessage: err,
        });
      } else if (result.affectedRows === 0) {
        res.status(404).json({
          message: "buku tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "update buku berhasil",
        });
      }
    });
  };
  
  // mendefinisikan controller delete buku
  const deleteBuku = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM Buku WHERE id_buku = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "hapus buku gagal",
          serverMessage: err,
        });
      } else if (result.affectedRows === 0) {
        res.status(404).json({
          message: "buku tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "hapus buku berhasil",
        });
      }
    });
  };
  
  module.exports = { getAllBuku, getBukuById, addBuku, updateBuku, deleteBuku };
