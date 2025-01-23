const connection = require('../database/db');


//Fungsi auth
async function users() {
    const [hasil] = await connection.execute(" SELECT * FROM pengguna");
    return hasil;
}

async function usersDetailById(id) {
    try {
        const [hasil] = await connection.execute("SELECT * FROM pengguna where id = ?", 
            [id]
        );
        return hasil;
    } catch (error) {
        throw error
    }
}


//fungsi create
async function userNew(nama, userName, email, nohp, password) {
    try {
        const {hasil} = await connection.execute("insert into pengguna (nama_panjang, username, email, nomor_handphone, password values(?, ?, ?, ?, ?)", [nama, userName, email, nohp, password]);
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
async function userReadById(id) {
    try{
        const {hasil} = await connection.execute("select * from pengguna where id_pengguna = ?", [id])
        return hasil;
    } catch(err){
        throw err
    }
}

//funsgi update
async function userUpdate(nama, username, email, nohp, password, id) {
    try {
        const{hasil} = await connection.execute("update pengguna set nama_panjang = ?, usename = ?, email = ?, nomor_handphone = ?, password = ? where id_pengguna = ?", [nama, username, email, nohp, password, id])
        return hasil
    } catch(Err){
        throw err
    }
}

//fungsi delete
async function userDelete(id) {
    try{
        const {hasil} = await connection.execute("delete from pengguna where id_pengguna = ?",[id])
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