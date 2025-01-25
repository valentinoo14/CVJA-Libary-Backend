const userModelsConnection = require('../models/pengguna_models');


// Fungsi create
async function userCreate(req, res) {
    const { nama_panjang, username, email, nomor_handphone, password } = req.body;
    try {
        const hasil = await userModelsConnection.userNew(nama_panjang, username, email, nomor_handphone, password);
        res.status(201).json(hasil); // Status 201 untuk created
    } catch (err) {
        console.error(err); // Tambahkan log error
        res.status(500).json({
            message: "Gagal membuat data pengguna baru",
            error: err.message
        });
    }
}
// Fungsi create
// async function userCreate(req, res) {
//     let { nama, username, email, no_handphone, password } = req.body;

//     // Cek dan pastikan jika ada nilai yang undefined, ganti dengan null
//     nama = nama === undefined ? null : nama;
//     username = username === undefined ? null : username;
//     email = email === undefined ? null : email;
//     no_handphone = no_handphone === undefined ? null : no_handphone;
//     password = password === undefined ? null : password;

//     // Validasi input
//     if (!nama || !username || !email || !no_handphone || !password) {
//         return res.status(400).json({
//             message: "Semua field harus diisi"
//         });
//     }

//     try {
//         // Memanggil model untuk memasukkan data pengguna
//         const hasil = await userModelsConnection.userNew(nama, username, email, no_handphone, password);

//         // Mengecek apakah data berhasil dimasukkan
//         if (hasil.affectedRows > 0) {
//             res.status(201).json({
//                 message: "Data pengguna berhasil ditambahkan",
//                 data: {
//                     id: hasil.insertId, // ID pengguna yang baru dibuat
//                     nama: nama,
//                     username: username,
//                     email: email,
//                     no_handphone: no_handphone
//                 }
//             });
//         } else {
//             res.status(500).json({
//                 message: "Gagal menambahkan data pengguna"
//             });
//         }
//     } catch (err) {
//         console.error(err); // Menambahkan log error untuk debugging
//         res.status(500).json({
//             message: "Gagal membuat data pengguna baru",
//             error: err.message
//         });
//     }
// }


// Fungsi read
async function userGet(req, res) {
    try {
        const hasil = await userModelsConnection.userRead();
        res.status(200).json({
            message: "Data pengguna berhasil diambil",
            data: hasil
        }); // Status 200 untuk OK
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
            return res.status(404).json({ message: "Data pengguna tidak ditemukannn" }); // Status 404 untuk not found
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
    const id_pengguna = req.params.id_pengguna; // Mengambil ID dari parameter URL
    const { nama_panjang, username, email, nomor_handphone, password } = req.body;
    // Validasi input
    if (!nama_panjang || !username || !email || !nomor_handphone || !password) {
        return res.status(400).json({
            message: "Semua field harus diisi"
        });
    }
    try {
        // Memanggil fungsi model untuk update data pengguna
        const hasil = await userModelsConnection.userUpdate(nama_panjang, username, email, nomor_handphone, password, id_pengguna);
        // Mengecek apakah data berhasil diupdate
        if (hasil.affectedRows === 0) {
            return res.status(404).json({ message: "Data pengguna tidak ditemukan atau tidak ada perubahan" });
        }
        res.status(200).json({ message: "Update pengguna berhasil", data: { id_pengguna, nama_panjang, username, email, nomor_handphone } });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Gagal update pengguna",
            error: err.message
        });
    }
}
// async function userUpdate(req, res) {ç
//     const id = req.params.id_pengguna;
//     const { nama_panjang, username, email, nomor_handphone, password } = req.body;
//     try {
//         const hasil = await userModelsConnection.userUpdate(nama_panjang, username, email, nomor_handphone, password);
//         if (!hasil) {
//             return res.status(404).json({ message: "Data pengguna tidak ditemukan" });
//         }
//         res.status(200).json({ message: "Update pengguna berhasil", data: hasil });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Gagal update pengguna",
//             error: err.message
//         });
//     }
// }

// Operasi delete
async function userDelete(req, res) {
    const id = req.params.id_pengguna;
    try {
        const hasil = await userModelsConnection.userDelete(id);
        if (hasil.affectedRows === 0) {
            return res.status(404).json({ message: "Data pengguna tidak ditemukan" });
        }
        res.status(200).json({
            message: "Data pengguna berhasil dihapus",
            id_pengguna: id
        });
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
