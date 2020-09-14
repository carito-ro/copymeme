"use strict";

var _bodyParser = require("body-parser");

var _meme = _interopRequireDefault(require("./controllers/meme.controller"));

var _comment = _interopRequireDefault(require("./controllers/comment.controller"));

var _votes = _interopRequireDefault(require("./controllers/votes.controller"));

var _categories = _interopRequireDefault(require("./controllers/categories.controller"));

var _users = _interopRequireDefault(require("./controllers/users.controller"));

var _login = _interopRequireDefault(require("./controllers/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express'),
    config = require('./configs/config'),
    bodyParser = require('body-parser');

var app = express();
app.use((0, _bodyParser.json)());
app.use('/memes', _meme["default"]);
app.use('/comments', _comment["default"]);
app.use('/votes', _votes["default"]);
app.use('/categories', _categories["default"]);
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});
app.get('/api/v1/status', function (req, res) {
  res.status(200).send({
    message: 'OK'
  });
});
var PORT = 5000;
app.listen(PORT, function () {
  console.log("server running on port ".concat(PORT));
});
app.get('/', function (req, res) {
  res.send('Inicio');
});
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