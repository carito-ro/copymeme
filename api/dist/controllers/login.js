"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router(),
    jwt = require('jsonwebtoken'),
    connection = require('../connection'),
    config = require('../configs/config'),
    bcrypt = require('bcryptjs');

router.post('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var email, password, query, db, collection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;
            password = req.body.password;
            console.log(email);
            _context.prev = 3;
            query = {
              email: email
            };
            _context.next = 7;
            return connection();

          case 7:
            db = _context.sent;
            collection = db.collection('users');
            _context.next = 11;
            return collection.findOne(query).then(function (user) {
              if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                  if (err) {
                    res.json({
                      message: err
                    });
                  }

                  if (result) {
                    var payload = {
                      check: true
                    };
                    var token = jwt.sign(payload, config.llave, {
                      expiresIn: config.expiresIn
                    });
                    user.password = '';
                    res.json({
                      message: 'Autenticación correcta',
                      user: user,
                      token: token
                    });
                  } else {
                    res.json({
                      message: 'Usuario o contraseña incorrectos',
                      user: null,
                      token: null
                    });
                  }
                });
              } else {
                res.json({
                  message: 'Usuario o contraseña incorrectos',
                  user: null,
                  token: null
                });
              }
            });

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0); // 30

            res.json({
              message: _context.t0,
              user: null,
              token: null
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;