const express = require('express')
const routing = express.Router()
const bukuControl = require('../routes/bukuControl')
const penggunaControl = require('../routes/penggunaControl')
const peminjamanControl = require("../routes/peminjamanControl")
const authGenerate = require('../controllers/authGenerate')
const authVerify = require('../middleware/authVerify')

//routing
// routing.use('/', authGenerate) // disini token wa matikan dulu karena masih eror dan crud juga masih else hasilnya
routing.use('/buku', bukuControl)
routing.use('/pengguna', penggunaControl)
routing.use('/peminjaman', peminjamanControl)

module.exports = routing