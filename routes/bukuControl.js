const express = require('express')
const bukuControl = express()
const Control = require('../controllers/buku')

bukuControl.post('/', Control.CreateBuku)
bukuControl.get('/', Control.GetBuku)
bukuControl.get('/:id', Control.GetIdBuku)
bukuControl.patch('/:id', Control.UpdateBuku)
bukuControl.delete('/:id', Control.DeleteBuku)

module.exports = bukuControl