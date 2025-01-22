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
    const id = req.params.id
    try{
        const hasil = await peminjamanConnection.peminjamanReadId(id)
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
    const id = req.params.id
    try{
        const hasil = await peminjamanConnection.peminjamanUpdate(id)
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
    const id = req.params.id
    try{
        const hasil = await peminjamanConnection.peminjamanDelete(id)
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