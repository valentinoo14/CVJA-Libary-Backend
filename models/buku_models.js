const connection = require('../database/db')

//fungsi untuk melakukan get
async function bukuGet() {
    const [hasil] = await connection.execute("select * from buku")
    return hasil
}

//fungsi untuk melakukan get by id
async function bukuGetId(id_buku) {
    try {
        const [hasil] = await connection.execute("select * from buku where id_buku = ?", [id_buku]);
        return hasil
    } catch (err){
        throw err
    }
}

//fungsi untuk melakukan update
async function bukuUpdate(id_buku, penerbit, id_buku) {
    try {
        const [hasil] = await connection.execute("update buku set judul_buku = ?, penerbit = ? where id_buku = ?", [judul_buku, penerbit, id_buku]);
        return hasil
    } catch (err){
        throw err
    }
}

//funsgi untuk melakukan create
async function bukuCreate(judul_buku, penerbit, kategori) {
    try {
        const [hasil] = await connection.execute("insert into buku (judul_buku, penerbit, kategori) value(?, ?, ?)", [judul_buku, penerbit, kategori]);
        return hasil
    } catch(err){
        throw err
    }
}

//fungsi untuk melakukan delete
async function bukuDelete(id_buku) {
    try{
        const [hasil] = await connection.execute("delete from buku where id_buku = ?", [id_buku]);
        return hasil
    } catch(err){
        throw err
    }
}

module.exports = {
    bukuGet,
    bukuGetId,
    bukuCreate,
    bukuDelete,
    bukuUpdate
}