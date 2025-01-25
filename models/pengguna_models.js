const connection = require('../database/db');


//Fungsi auth
async function users() {
    const [hasil] = await connection.execute(" SELECT * FROM pengguna");
    return hasil;
}

async function usersDetailById(id_pengguna) {
    try {
        const [hasil] = await connection.execute("SELECT * FROM pengguna WHERE id_pengguna = ?", 
        [id_pengguna]);
        console.log("Hasil Query:", hasil);
        return hasil;
    } catch (error) {
        throw error
    }
}


//fungsi create
async function userNew(nama_panjang, username, email, nomor_handphone, password) {
    try {
        // Menjalankan query INSERT ke database
        const [hasil] = await connection.execute(
            "INSERT INTO pengguna (nama_panjang, username, email, nomor_handphone, password) VALUES (?, ?, ?, ?, ?)",
            [nama_panjang, username, email, nomor_handphone, password]
        );
        // Mengembalikan hasil eksekusi query
        return hasil;
    } catch (err) {
        throw err; // Melempar error jika terjadi masalah
    }
}
// async function userNew(nama_panjang, username, email, nomor_handphone, password) {
//     try {
//         const [hasil] = await connection.execute("insert into pengguna (nama_panjang, username, email, nomor_handphone, password) values(?, ?, ?, ?, ?)", [nama_panjang, username, email, nomor_handphone, password]);
//         return hasil;
//     } catch(err){
//         throw err;
//     }
// }

//fungsi read all
async function userRead() {
    try {
        const [rows] = await connection.execute("SELECT * FROM pengguna");
        return rows; // Mengembalikan data yang ada pada rows
    } catch (err) {
        throw err; // Jika ada error, akan dilempar untuk ditangani oleh pemanggil fungsi
    }
}
// async function userRead() {
//     try{
//         const {hasil} = await connection.execute("select * from pengguna")
//         return hasil
//     } catch(err){
//         throw err
//     }
// }

//fungsi read by id
async function userReadById(id_pengguna) {
    try {
        const [rows] = await connection.execute(
            "SELECT * FROM pengguna WHERE id_pengguna = ?",
            [id_pengguna]
        );
        return rows[0]; // Kembalikan satu baris (jika hanya satu pengguna yang diharapkan)
    } catch (err) {
        throw err;
    }
}
// async function userReadById(id_pengguna) {
//     try{
//         const {hasil} = await connection.execute("select * from pengguna where id_pengguna = ?", [id_pengguna])
//         return hasil;
//     } catch(err){
//         throw err
//     }
// }


//funsgi update
async function userUpdate(nama_panjang, username, email, nomor_handphone, password, id_pengguna) {
    try {
        // Melakukan query untuk update data pengguna berdasarkan id_pengguna
        const [hasil] = await connection.execute(
            "UPDATE pengguna SET nama_panjang = ?, username = ?, email = ?, nomor_handphone = ?, password = ? WHERE id_pengguna = ?", 
            [nama_panjang, username, email, nomor_handphone, password, id_pengguna]
        );
        return hasil;  // Mengembalikan hasil query
    } catch (err) {
        throw err;  // Menangani error
    }
}
// async function userUpdate(nama_panjang, username, email, nomor_handphone, password, id_pengguna) {
//     try {
//         const{hasil} = await connection.execute("update pengguna set nama_panjang = ?, username = ?, email = ?, nomor_handphone = ?, password = ? where id_pengguna = ?", [nama_panjang, username, email, nomor_handphone, password, id_pengguna])
//         return hasil
//     } catch(Err){
//         throw err
//     }
// }

//fungsi delete
async function userDelete(id_pengguna) {
    try{
        const [hasil] = await connection.execute("delete from pengguna where id_pengguna = ?",[id_pengguna])
        return hasil
    } catch(err){
        throw err;
    }
}

module.exports = {
    users,
    usersDetailById,
    userNew,
    userRead,
    userReadById,
    userUpdate,
    userDelete
}