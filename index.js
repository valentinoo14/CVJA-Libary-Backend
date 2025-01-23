const express = require('express');
const app = express();
const db = require('./database/db')
const port = 3100;
const allroutes = require('./routes/web')

db.connect((err) => {
    if(err){
        console.log('database gagal konek', err);
    } else {
        console.log('database berhasil konek...')
    }
});

// Agar bisa input data dari JSON dan body form HTML
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/cvjaLibrary', allroutes);

app.listen(port, () => {
    console.log(`server sedang berjalan di port ${port}`)
});
