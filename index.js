const express = require('express');
const app = express();
const db = require('./database/db')
const port = 3200;

db.connect((err) => {
    if(err){
        console.log('databse gagal konek', err);
    } else {
        console.log('database berhasil konek...')
    }
});

//agar bisa input data dari json dan body form html
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(port, () => {
    console.log(`server sedang berjalan di port ${port}`)
})