import express from 'express';
import { helpers } from '../helpers';
const router = express.Router(),
  bcrypt = require('bcryptjs');

router.get('/', async function (req, res) {
  helpers.getAll('users', {}, req, res);
});

router.get('/:email', async function (req, res) {
  const email = req.params.email;
  helpers.getAll('users', { email: email }, req, res);
});

router.post('/', async function (req, res) {
  const user = req.body;
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    user.password = hashedPass;
    helpers.insert('users', user, req, res);
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
