const express = require('express')
const penggunaControl = express.Router()
const Control = require('../controllers/pengguna')

penggunaControl.post('/', Control.userCreate)
penggunaControl.get('/', Control.userGet)
penggunaControl.get('/:id', Control.userGetId)
penggunaControl.put('/:id', Control.userUpdate)
penggunaControl.delete('/:id', Control.userDelete)

module.exports = penggunaControl