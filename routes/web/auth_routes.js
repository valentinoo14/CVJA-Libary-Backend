const express = require('express');
const route = express.Router();
const { login } = require("../../controllers/auth");
const penggunaController = require("../../controllers/`");
const authenticateToken = require("../../middleware/auth");

route.post('/login', login)
route.get('/:id', authenticateToken, penggunaController.penggunaDetailByID)

module.exports = route