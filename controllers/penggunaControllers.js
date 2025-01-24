const userModelsConnection = require('../models/pengguna_models');


// Fungsi create
async function userCreate(req, res) {
    const { nama, username, email, no_handphone, password } = req.body;
    try {
        const hasil = await userModelsConnection.userNew(nama, username, email, no_handphone, password);
        res.status(201).json(hasil); // Status 201 untuk created
    } catch (err) {
        console.error(err); // Tambahkan log error
        res.status(500).json({
            message: "Gagal membuat data pengguna baru",
            error: err.message
        });
    }
}

// Fungsi read
async function userGet(req, res) {
    try {
        const hasil = await userModelsConnection.userRead();
        res.status(200).json(hasil); // Status 200 untuk OK
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error gagal mengambil data pengguna",
            error: err.message
        });
    }
}

// Operasi read berdasarkan id
async function userGetId(req, res) {
    const id = req.params.id_pengguna;
    try {
        const hasil = await userModelsConnection.userReadById(id);
        if (!hasil) {
            return res.status(404).json({ message: "Data pengguna tidak ditemukan" }); // Status 404 untuk not found
        }
        res.status(200).json(hasil);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error gagal mengambil data pengguna",
            error: err.message
        });
    }
}

// Operasi update
async function userUpdate(req, res) {
    const id = req.params.id_pengguna;
    const { nama, username, email, nohp, password } = req.body;
    try {
        const hasil = await userModelsConnection.userUpdate(nama, username, email, nohp, password, id);
        if (!hasil) {
            return res.status(404).json({ message: "Data pengguna tidak ditemukan" });
        }
        res.status(200).json({ message: "Update pengguna berhasil", data: hasil });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Gagal update pengguna",
            error: err.message
        });
    }
}

// Operasi delete
async function userDelete(req, res) {
    const id = req.params.id_pengguna;
    try {
        const hasil = await userModelsConnection.userDelete(id);
        if (!hasil) {
            return res.status(404).json({ message: "Data pengguna tidak ditemukan" });
        }
        res.status(204).end(); // Status 204 untuk no content
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Gagal menghapus data pengguna",
            error: err.message
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
