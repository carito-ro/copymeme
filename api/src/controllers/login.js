import express from 'express';

const router = express.Router(),
  jwt = require('jsonwebtoken'),
  connection = require('../connection'),
  config = require('../configs/config'),
  bcrypt = require('bcryptjs');

router.post('/', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    let query = { email: email };
    const db = await connection();
    var collection = db.collection('users');
    await collection.findOne(query).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              message: err,
            });
          }
          if (result) {
            const payload = {
              check: true,
            };
            const token = jwt.sign(payload, config.llave, {
              expiresIn: config.expiresIn,
            });
            user.password = '';
            res.json({
              message: 'Autenticación correcta',
              user: user,
              token: token,
            });
          } else {
            res.json({
              message: 'Usuario o contraseña incorrectos',
              user: null,
              token: null,
            });
          }
        });
      } else {
        res.json({
          message: 'Usuario o contraseña incorrectos',
          user: null,
          token: null,
        });
      }
    });
  } catch (e) {
    console.log(e); // 30
    res.json({
      message: e,
      user: null,
      token: null,
    });
  }
});

export default router;
