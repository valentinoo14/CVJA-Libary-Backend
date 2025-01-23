const express = require('express')
const peminjamanControl = express.Router()
const Control = require('../controllers/peminjaman')

peminjamanControl.post('/', Control.pjmCreate)
peminjamanControl.get('/', Control.pjmGetAll)
peminjamanControl.get('/:id', Control.pjmGetId)
peminjamanControl.patch('/:id', Control.pjmUpdate)
peminjamanControl.delete('/:id', Control.pjmDelete)

module.exports = peminjamanControl