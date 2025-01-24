const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'valent12337', (err, pengguna) => {
    if (err) return res.sendStatus(403);
    req.pengguna = pengguna;
    next();
  });
}

// fungsi jwt.verity() dari jwt untuk validasi apakah token yang dikirim melalui header "authorization" telah sesuai dengan key yang telah diciptakan sebelumnya.
module.exports = authenticateToken;