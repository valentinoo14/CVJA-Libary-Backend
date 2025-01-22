const express = require('express')
const penggunaControl = express()
const Control = require('../controllers/pengguna')

penggunaControl.post('/create', Control.userCreate)
penggunaControl.get('/', Control.userGet)
penggunaControl.get('/:id', Control.userGetId)
penggunaControl.put('/:id', Control.userUpdate)
penggunaControl.delete('/:id', Control.userDelete)

module.exports = penggunaControl