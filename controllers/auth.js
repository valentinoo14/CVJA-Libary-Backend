const penggunaModel = require("../models/pengguna_models");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { id_pengguna } = req.body;

    // const { id, password, nama} = req.body;
    // const idUser = req.body.id;
    // const namaPengguna = req.body.nama;
    // console.log(namaUser);
    
    const result = await penggunaModel.usersDetailByID(id_pengguna);
    if (result.length <= 0) {
      res.json({
        message: "Login failed",
      });
      return;
    }

    const token = jwt.sign(
      { id_pengguna: result[0].id_pengguna, nama_panjang: result[0].nama_panjang },
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

// const penggunaModel = require("../models/pengguna_models");
// const jwt = require("jsonwebtoken");

// async function login(req, res) {
//   try {
//     const { email, password } = req.body;

//     // Fetch user by email
//     const result = await penggunaModel.userRead();
//     const user = result.find(u => u.email === email && u.password === password);

//     if (!user) {
//       return res.status(401).json({ message: "Login failed: Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user.id_pengguna, name: user.nama_panjang },
//       "valent12337",
//       { expiresIn: "14 days" }
//     );

//     return res.json({
//       message: "Login success",
//       id: user.id_pengguna,
//       token,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "An error occurred" });
//   }
// }

// async function penggunaDetailByID(req, res) {
//   try {
//     const { id } = req.params;
//     const result = await penggunaModel.userReadById(id);

//     if (result.length === 0) {
//       return res.status(404).json({ message: "Pengguna tidak ditemukan" });
//     }

//     return res.json({
//       message: "Pengguna ditemukan",
//       data: result[0],
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "An error occurred" });
//   }
// }

// module.exports = {
//   login,
//   penggunaDetailByID,
// };
