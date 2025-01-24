const connection = require('../database/db');


//Fungsi auth
async function users() {
    const [hasil] = await connection.execute(" SELECT * FROM pengguna");
    return hasil;
}

async function usersDetailById(id_pengguna) {
    try {
        const [hasil] = await connection.execute("SELECT * FROM pengguna where id_pengguna = ?", 
            [id_pengguna]
        );
        return hasil;
    } catch (error) {
        throw error
    }
}


//fungsi create
async function userNew(nama_panjang, username, email, nomor_handphone, password) {
    try {
        const {hasil} = await connection.execute("insert into pengguna (nama_panjang, username, email, nomor_handphone, password values(?, ?, ?, ?, ?)", [nama_panjang, username, email, nomor_handphone, password]);
        return hasil;
    } catch(err){
        throw err;
    }
}

//fungsi read all
async function userRead() {
    try{
        const {hasil} = await connection.execute("select * from pengguna")
        return hasil
    } catch(err){
        throw err
    }
}

//fungsi read by id
async function userReadById(id_pengguna) {
    try{
        const {hasil} = await connection.execute("select * from pengguna where id_pengguna = ?", [id_pengguna])
        return hasil;
    } catch(err){
        throw err
    }
}

//funsgi update
async function userUpdate(nama, username, email, nomor_handphone, password, id_pengguna) {
    try {
        const{hasil} = await connection.execute("update pengguna set nama_panjang = ?, username = ?, email = ?, nomor_handphone = ?, password = ? where id_pengguna = ?", [nama, username, email, nomor_handphone, password, id_pengguna])
        return hasil
    } catch(Err){
        throw err
    }
}

//fungsi delete
async function userDelete(id_pengguna) {
    try{
        const {hasil} = await connection.execute("delete from pengguna where id_pengguna = ?",[id_pengguna])
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