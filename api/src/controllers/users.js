import express from 'express';
import { helpers } from '../helpers';
const router = express.Router(),
  bcrypt = require('bcryptjs');

router.get('/', async function (req, res) {
  helpers.getAll('users', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
  const nombre = req.params.nombre;
  helpers.getAll('users', { nombre: nombre }, req, res);
});

router.post('/', async function (req, res) {
  const alumno = req.body;
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    alumno.password = hashedPass;
    helpers.insert('users', alumno, req, res);
  });
});

router.put('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  const datos = req.body;
  helpers.update('users', { id: id }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  helpers.delete('users', { id: id }, req, res);
});

export default router;
