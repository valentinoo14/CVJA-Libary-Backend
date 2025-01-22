const penggunaModel = require("../models/pengguna_models");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { id } = req.body

    // const { id, password, nama} = req.body;
    // const idUser = req.body.id;
    // const namaPengguna = req.body.nama;
    // console.log(namaUser);
    
    const result = await penggunaModel.penggunaDetailByID(id, nama);
    if (result.length <= 0) {
      res.json({
        message: "Login failed",
      });
      return;
    }

    const token = jwt.sign(
      { id: result[0].id, name: result[0].name },
      "valent12337",
      { expiresIn: "14 days" }
    );

    res.json({
      message: "Login success",
      id: result[0].id,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
}

async function penggunaDetailByID(req, res) {
  const { id } = req.params;
  const result = await penggunaModel.penggunaDetailByID(id);
  if(result.length <= 0) {
    res.json({
      message: "Pengguna tidak ditemukan",
    });
    return;
  }
  res.json({
    message: "pengguna ditemukann",
    data: result[0],
  });
}

module.exports = {
    login,
    penggunaDetailByID
}