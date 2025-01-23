const userModelsConnection = require('../models/pengguna_models');

// Fungsi create
async function userCreate(req, res) {
    const { nama, userName, email, nohp, password } = req.body;
    try {
        const hasil = await userModelsConnection.userNew(nama, userName, email, nohp, password);
        res.status(200).json({ hasil });
    } catch (err) {
        console.error('Error in userCreate:', err);
        res.status(500).json({
            message: "Gagal membuat data pengguna baru",
            err
        });
    }
}

// Fungsi read
async function userGet(req, res) {
    try {
        const hasil = await userModelsConnection.userRead();
        res.status(202).json(hasil);
    } catch (err) {
        console.error('Error in userGet:', err); // Tambahkan logging
        res.status(500).json({
            message: "Error gagal mengambil data customer",
            err
        });
    }
}

// Operasi read berdasarkan id
async function userGetId(req, res) {
    const id = req.params.id;
    try {
        const hasil = await userModelsConnection.userReadById(id);
        res.status(202).json(hasil);
    } catch (err) {
        console.error('Error in userGetId:', err); // Tambahkan logging
        res.status(500).json({
            message: "Error gagal mengambil data customer",
            err
        });
    }
}

// Operasi update
async function userUpdate(req, res) {
    const id = req.params.id;
    const { nama, username, email, nohp, password } = req.body;
    try {
        const hasil = await userModelsConnection.userUpdate(nama, username, email, nohp, password, id);
        res.status(202).json(hasil);
    } catch (err) {
        console.error('Error in userUpdate:', err); // Tambahkan logging
        res.status(500).json({
            message: "Gagal update customer",
            err
        });
    }
}

// Operasi delete
async function userDelete(req, res) {
    const id = req.params.id;
    try {
        const hasil = await userModelsConnection.userDelete(id);
        res.status(202).json(hasil);
    } catch (err) {
        console.error('Error in userDelete:', err); // Tambahkan logging
        res.status(500).json({
            message: "Gagal menghapus data user",
            err
        });
    }
}

module.exports = {
    userCreate,
    userGet,
    userGetId,
    userUpdate,
    userDelete
};
