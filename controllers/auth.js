const penggunaModel = require("../models/pengguna_models");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { id_pengguna } = req.body;

    // const { id, password, nama} = req.body;
    // const idUser = req.body.id;
    // const namaPengguna = req.body.nama;
    // console.log(namaUser);
    
    const result = await penggunaModel.usersDetailById(id_pengguna);
    if (result.length <= 0) {
      res.json({
        message: "Login failed",
      });
      return;
    }

    const token = jwt.sign(
      { id_pengguna: result[0].id_pengguna},
      "valent12337",
      { expiresIn: "14 days" }
    );

    res.json({
      message: "Login success",
      id_pengguna: result[0].id_pengguna,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
}

// async function penggunaDetailByID(req, res) {
//   const { id } = req.params;
//   const result = await penggunaModel.penggunaDetailByID(id);
//   if(result.length <= 0) {
//     res.json({
//       message: "Pengguna tidak ditemukan",
//     });
//     return;
//   }
//   res.json({
//     message: "pengguna ditemukann",
//     data: result[0],
//   });
// }

module.exports = {
  login
}


// "id_pengguna": 1
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5nZ3VuYSI6MSwiaWF0IjoxNzM3NzM4OTE2LCJleHAiOjE3Mzg5NDg1MTZ9.ToT1vjHu8nxVCKR5yCoWxPSY9Mr3Tm57D_fzvefv4C0"