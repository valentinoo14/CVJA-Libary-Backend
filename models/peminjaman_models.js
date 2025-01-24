const connection = require('../database/db')

//models untuk create
async function peminjamanCreate(tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna) {
    try{
        const [hasil] = await connection.execute("insert into peminjaman(tanggal_peminjaman, tanggal_peminjaman, id_buku, id_pengguna values(?,?,?,?", [tanggal_peminjaman, tanggal_pengembalian, id_buku, id_pengguna])
        return hasil
    } catch(err){
        console.error("Terjadi error:", err);
        throw err
    }
}

//models read all
async function peminjamanReadAll() {
    try{
        const [hasil] = await connection.execute("select * from peminjaman")
        return hasil
    } catch (err){
        console.error("Terjadi error:", err);
        throw err
    }
}

//models read id
async function peminjamanReadId(id_peminjaman) {
    try{
        const[hasil] = await connection.execute("select * from peminjaman where id_peminjaman = ?" [id_peminjaman])
        return hasil
    } catch(err){
        console.error("Terjadi error:", err);
        throw err
    }
}

//models update
async function peminjamanUpdate(id_peminjaman) {
    try{
        const [hasil] = await connection.execute("update peminjaman set id_buku = ?" [id_peminjaman])
        return hasil
    } catch(err){
        console.error("Terjadi error:", err);
        throw err
    }
}

//mpdels delete
async function peminjamanDelete(id_peminjaman) {
    try{
        const [hasil] = await connection.execute("delete from peminjaman where id_peminjaman = ?", [id_peminjaman])
    return hasil
    } catch(err){
        console.error("Terjadi error:", err);
        throw err
    }
}

module.exports = {
    peminjamanCreate,
    peminjamanDelete,
    peminjamanReadAll,
    peminjamanReadId,
    peminjamanUpdate
}