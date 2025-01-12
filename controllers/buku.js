const express = require('express');
const server = express();

// operasi read
server.get('/buku', (req, res) => {
    const query = "SELECT * FROM buku"
    server.query(query, [], (err, result) => {
        if(err) {
            res.status(404).json({
                message: "gagal membaca data",
                serverMessage: err
            });
        } else {
            res.status(202).json({
                message: "berhasil membaca data",
                user: result,
            });
        };
    });
});

server.getOne('/buku/:id', (req, res) => {
    const query = "SELECT * FROM buku WHERE id_buku = ?"
    server.query(query, [id_buku], (err, result) => {
        if(err){
            res.status(404).json({
                message: "Gagal membaca data id",
                serverMessage: err
            });
        } else {
            res.status(202).json({
                message: "berhasil membaca data berdasarkan id",
                user: result,
            });
        };
    });
});

//operasi update
server.patch('/buku/update/:id', (req, res) => {
    const {judul_buku, penerbit}= req.body;
    const id = req.params.id;
    const query = `UPDATE buku SET judul_buku = ?, penerbit = ? WHERE id_buku = ?`;
    server.query(query, [judul_buku, penerbit, id], (err, result) => {
        if(err) {
            res.status(404).json({
                message: "gagal update data",
                serverMessage: err
            });
        } else {
            res.status(202).json({
                message: "berhasil update data buku",
            });
        };
    });
});

//operasi create
server.post('buku/create', (req, res) => {
    const buku = req.body;
    const query = "INPUT INTO buku (judul_buku, penerbit, kategori) VALUE (?,?,?)"
    server.query(query, [buku.judul_buku, buku.penerbit, buku.kategori], (err,result) => {
        if(err){
            res.status(404).json({
                message: "gagal membuat data baru",
                serverMassage: err
            });
        } else {
            res.status(202).json({
                message: "berhasil membuat data buku baru kedalam database",
            });
        };
    });
});

//operasi delete
server.delete('buku/delete/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM buku WHERE id_buku = ?`
    server.query(query, [id] , (err, result) => {
        if(err){
            res.status(404).json({
                message: "gagal melakukan penghapusan data",
                serverMassage: err
            });
        } else {
            res.status(202).json({
                message: "berhasil hapus data"
            })
        }
    })
})