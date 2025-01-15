const userModelsConnection = require('../models/pengguna_models');

//fungsi create
async function userCreate(req, res) {
    const {nama, userName,email, nohp, password} = req.body;
    try {
        const hasil = await userModelsConnection.userNew(nama, userName, email, nohp, password)
        res.status(200).json(hasil)
    } catch (err){
        res.status(500).json({
            message: "gagal membuat data pengguna baru", err
        })
    }
}

//fungsi read
async function userGet(req, res) {
    try {
        const hasil = await userModelsConnection.userRead();
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "error gagal mengambil data customer", err
        })
    }
}

// operasi read berdasarkan id
async function userGetId(req, res) {
    const id = req.params.id
    try {
        const hasil = await userModelsConnection.userReadById(id);
        res.status(202).json(hasil)
    } catch (err){
        res.status(500).json({
            message: "error gagal mengambil data customer", err
        })
    }
}

//operasi update
async function userUpdate(req, res) {
    const id = req.params.id
    const {nama, username, email, nohp, password} = req.body
    try {
        const hasil = await userModelsConnection.userUpdate(nama, username, email, nohp, password, id);
        res.status(202).json(hasil)
    } catch(err) {
        res.status(500).json({
            message: "gagak update customer", err
        })
    }
}

//operasi delete
async function userDelete(req, res) {
    const id = req.params.id
    try{
        const hasil = await userModelsConnection.userDelete(id);
        res.status(202).json(hasil)
    } catch(err){
        res.status(500).json({
            message: "gagal menghapus data user"
        })
    }
}

module.exports = {
    userCreate,
    userGet,
    userGetId,
    userUpdate,
    userDelete
}