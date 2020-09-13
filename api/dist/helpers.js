"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpers = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var connection = require('./connection');

var helpers = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(table, query, req, res) {
      var db, collection, resultado;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return connection();

            case 3:
              db = _context.sent;
              collection = db.collection(table);
              _context.next = 7;
              return collection.find(query);

            case 7:
              resultado = _context.sent;
              resultado.toArray(function (error, documents) {
                res.json(documents);
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              res.json({
                error: _context.t0
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    function getAll(_x, _x2, _x3, _x4) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  getOne: function () {
    var _getOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(table, query, req, res) {
      var db, collection, resultado;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return connection();

            case 3:
              db = _context2.sent;
              collection = db.collection(table);
              _context2.next = 7;
              return collection.findOne(query);

            case 7:
              resultado = _context2.sent;
              resultado.toArray(function (error, documents) {
                res.json(documents);
              });
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              res.json({
                error: _context2.t0
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    function getOne(_x5, _x6, _x7, _x8) {
      return _getOne.apply(this, arguments);
    }

    return getOne;
  }(),
  insert: function () {
    var _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(table, object, req, res) {
      var db, collection, resultado;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return connection();

            case 3:
              db = _context3.sent;
              collection = db.collection(table);
              _context3.next = 7;
              return collection.insertOne(object);

            case 7:
              resultado = _context3.sent;
              res.json(resultado.ops[0]);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              res.json({
                error: _context3.t0
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    function insert(_x9, _x10, _x11, _x12) {
      return _insert.apply(this, arguments);
    }

    return insert;
  }(),
  update: function () {
    var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(table, query, data, req, res) {
      var db, collection, resultado;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return connection();

            case 3:
              db = _context4.sent;
              collection = db.collection(table);
              _context4.next = 7;
              return collection.findOneAndUpdate(query, {
                $set: data
              }, {
                returnOriginal: false
              });

            case 7:
              resultado = _context4.sent;

              if (resultado.value) {
                res.json(resultado.value);
              } else {
                res.json({
                  ok: false
                });
              }

              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              res.json({
                error: _context4.t0
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    function update(_x13, _x14, _x15, _x16, _x17) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  "delete": function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(table, query, req, res) {
      var db, collection, resultado;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return connection();

            case 3:
              db = _context5.sent;
              collection = db.collection(table);
              _context5.next = 7;
              return collection.deleteOne(query);

            case 7:
              resultado = _context5.sent;

              if (resultado.deletedCount) {
                res.json({
                  ok: true
                });
              } else {
                res.json({
                  ok: false
                });
              }

              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              res.json({
                error: _context5.t0
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 11]]);
    }));

    function _delete(_x18, _x19, _x20, _x21) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
};
exports.helpers = helpers;