const connection = require("../database/db");

async function pengguna() {
  const [result] = await connection.execute("SELECT * FROM pengguna");
  return result;
}

async function penggunaDetailByID(id, nama) {
  try {
    console.log(nama);
    
    const [result] = await connection.execute(
      "SELECT * FROM pengguna WHERE id =?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  users,
  usersDetailByID
};