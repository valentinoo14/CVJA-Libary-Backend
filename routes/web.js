const express = require('express')
const routing = express()
const bukuControl = require('../routes/bukuControl')
const penggunaControl = require('../routes/penggunaControl')
const peminjamanControl = require("../routes/peminjamanControl")
const authGenerate = require('../controllers/authGenerate')
const authVerify = require('../middleware/authVerify')

//routing
routing.use('/', authGenerate)
routing.use('/buku', authVerify, bukuControl)
routing.use('/pengguna', authVerify, penggunaControl)
routing.use('/peminjaman', authVerify, peminjamanControl)

module.exports = routing