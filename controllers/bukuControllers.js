const express = require('express');
const server = express();
const bukuConnection = require('../models/buku_models')

// operasi read
async function GetBuku(req, res) {
    try {
        const hasil = await bukuConnection.bukuGet();
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "error gagal mengambil data buku", err
        })
    }
}

// operasi read berdasarkan id
async function GetIdBuku(req, res) {
    const id_buku = req.params.id_buku
    try {
        const hasil = await bukuConnection.bukuGetId(id_buku);
        res.status(202).json(hasil)
    } catch (err){
        res.status(500).json({
            message: "error gagal mengambil data buku", err
        })
        console.log(err)
    }
}

//operasi update
async function UpdateBuku(req, res) {
    const id = req.params.id_buku
    const {judul, penerbit} = req.body
    try {
        const hasil = await bukuConnection.bukuUpdate(judul, penerbit, id);
        res.status(202).json(hasil)
    } catch(err) {
        res.status(500).json({
            message: "gagak update buku", err
        })
    }
}

//operasi create
async function CreateBuku(req, res) {
    const {judul_buku, penerbit, kategori} = req.body
    try {
        const hasil = await bukuConnection.bukuCreate(judul_buku, penerbit, kategori)
        res.status(202).json(hasil)
    } catch (err){
        res.status(500).json({
            message:"gagal membuat data baru buku", err
        })
    }
}

//operasi delete
async function DeleteBuku(req, res) {
    const id = req.params.id_buku
    try{
        const hasil = await bukuConnection.bukuDelete(id);
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "gagal menghapus data buku"
        })
    }
}

module.exports = {
    GetBuku,
    GetIdBuku,
    UpdateBuku,
    CreateBuku,
    DeleteBuku
}