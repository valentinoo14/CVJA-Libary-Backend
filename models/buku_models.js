const connection = require('../database/db')

//fungsi untuk melakukan get
async function bukuGet() {
    const [hasil] = await connection.execute("select * from buku")
    return hasil
}

//fungsi untuk melakukan get by id
async function bukuGetId(id) {
    try {
        const [hasil] = await connection.execute("select * from buku where id_buku = ?", [Id]);
        return hasil
    } catch (err){
        throw err
    }
}

//fungsi untuk melakukan update
async function bukuUpdate(judul, penerbit, id) {
    try {
        const [hasil] = await connection.execute("update buku set judul_buku = ?, penerbit = ? where id_buku = ?", [judul, penerbit, id]);
        return hasil
    } catch (err){
        throw err
    }
}

//funsgi untuk melakukan create
async function bukuCreate(judul, penerbit, kategori) {
    try {
        const [hasil] = await connection.execute("insert into buku (judul_buku, penerbit, kategori) value(?, ?, ?)", [judul, penerbit, kategori]);
        return hasil
    } catch(err){
        throw err
    }
}

//fungsi untuk melakukan delete
async function bukuDelete(id) {
    try{
        const [hasil] = await connection.execute("delete from buku where id_buku = ?", [id]);
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