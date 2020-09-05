"use strict";

var _users = _interopRequireDefault(require("./controllers/users"));

var _login = _interopRequireDefault(require("./controllers/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express'),
    config = require('./configs/config'),
    bodyParser = require('body-parser');

var app = express();
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var PORT = 5000;
app.listen(PORT, function () {
  console.log("server running on port ".concat(PORT));
});
app.get('/', function (req, res) {
  res.send('Inicio');
}); // 6

var rutasProtegidas = express.Router();
rutasProtegidas.use(function (req, res, next) {
  var token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, app.get('llave'), function (err, decoded) {
      if (err) {
        return res.json({
          mensaje: 'Token inválida'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: 'Token no proveída.'
    });
  }
});
app.get('/api/v1/status', function (req, res) {
  res.status(200).send({
    message: 'OK'
  });
}); //app.use('/users', rutasProtegidas, usersRoutes);// para protejer las urls

app.use('/users', _users["default"]);
app.use('/login', _login["default"]);