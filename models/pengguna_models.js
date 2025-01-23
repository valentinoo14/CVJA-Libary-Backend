const connection = require('../database/db');

// Fungsi create
async function userNew(nama, userName, email, nohp, password) {
    try {
        const [hasil] = await connection.execute("INSERT INTO pengguna (nama_panjang, username, email, nomor_handphone, password) VALUES (?, ?, ?, ?, ?)", [nama, userName, email, nohp, password]);
        return hasil;
    } catch (err) {
        throw err;
    }
}

// Fungsi read all
async function userRead() {
    try {
        const [hasil] = await connection.execute("SELECT * FROM pengguna");
        console.log('Query Result:', hasil); // Log hasil query
        return hasil;
    } catch (err) {
        console.error('Error executing query:', err); // Log error secara rinci
        throw err;
    }
}


// Fungsi read by id
async function userReadById(id) {
    try {
        const [hasil] = await connection.execute("SELECT * FROM pengguna WHERE id_pengguna = ?", [id]);
        return hasil;
    } catch (err) {
        throw err;
    }
}

// Fungsi update
async function userUpdate(nama, username, email, nohp, password, id) {
    try {
        const [hasil] = await connection.execute("UPDATE pengguna SET nama_panjang = ?, username = ?, email = ?, nomor_handphone = ?, password = ? WHERE id_pengguna = ?", [nama, username, email, nohp, password, id]);
        return hasil;
    } catch (err) {
        throw err;
    }
}

// Fungsi delete
async function userDelete(id) {
    try {
        const [hasil] = await connection.execute("DELETE FROM pengguna WHERE id_pengguna = ?", [id]);
        return hasil;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    userNew,
    userRead,
    userReadById,
    userUpdate,
    userDelete
};
