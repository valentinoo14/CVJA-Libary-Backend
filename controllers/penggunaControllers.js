// import konfigurasi database untuk menjalan query
const db = require("../database/db");

// mendefinisikan controller get all untuk Pengguna
const getAllPengguna = (req, res) => {
    const query = "SELECT * FROM Pengguna";
    db.query(query, [], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "get pengguna gagal",
          serverMessage: err,
        });
      } else {
        res.status(200).json({
          message: "get pengguna berhasil",
          pengguna: result,
        });
      }
    });
  };
  
  // mendefinisikan controller get by id untuk Pengguna
  const getPenggunaById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM Pengguna WHERE id_pengguna = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "get pengguna by id gagal",
          serverMessage: err,
        });
      } else if (result.length === 0) {
        res.status(404).json({
          message: "pengguna tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "get pengguna by id berhasil",
          pengguna: result[0],
        });
      }
    });
  };
  
  // mendefinisikan controller add pengguna
  const addPengguna = (req, res) => {
    const { nama_panjang, username, email, nomor_handphone, password } = req.body;
    const query = "INSERT INTO Pengguna (nama_panjang, username, email, nomor_handphone, password) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [nama_panjang, username, email, nomor_handphone, password], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "tambah pengguna gagal",
          serverMessage: err,
        });
      } else {
        res.status(201).json({
          message: "tambah pengguna berhasil",
        });
      }
    });
  };
  
  // mendefinisikan controller update pengguna
  const updatePengguna = (req, res) => {
    const { id } = req.params;
    const { nama_panjang, username, email, nomor_handphone, password } = req.body;
    const query = "UPDATE Pengguna SET nama_panjang = ?, username = ?, email = ?, nomor_handphone = ?, password = ? WHERE id_pengguna = ?";
    db.query(query, [nama_panjang, username, email, nomor_handphone, password, id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "update pengguna gagal",
          serverMessage: err,
        });
      } else if (result.affectedRows === 0) {
        res.status(404).json({
          message: "pengguna tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "update pengguna berhasil",
        });
      }
    });
  };
  
  // mendefinisikan controller delete pengguna
  const deletePengguna = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM Pengguna WHERE id_pengguna = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(400).json({
          message: "hapus pengguna gagal",
          serverMessage: err,
        });
      } else if (result.affectedRows === 0) {
        res.status(404).json({
          message: "pengguna tidak ditemukan",
        });
      } else {
        res.status(200).json({
          message: "hapus pengguna berhasil",
        });
      }
    });
  };
  
  module.exports = { getAllPengguna, getPenggunaById, addPengguna, updatePengguna, deletePengguna };
  