import express from 'express';
import User from '../schemas/user.schema'
const router = express.Router(), bcrypt = require('bcryptjs');

router.get('/', async function (req, res) {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
        data: null,
      });
    }
    res.json(users);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get('/:email', async function (req, res) {
  try {
    const email = req.params.email;
    const user = await User.find({ 'email': email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
        data: null,
      });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

router.post('/', async function (req, res) {
  const { email, name } = req.body;
  try {
    const user = new User({
      email,
      name
    });
    bcrypt.hash(req.body.password, 10, async function (err, hashedPass) {
      if (err) {
        res.json({
          error: err,
        });
      }
      user.password = hashedPass;
      const newUser = await user.save();
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

router.put('/:id', async function (req, res) {
  const actualizacion = req.body;
  try {
    const userUpdated = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: actualizacion,
      },
      { new: true }
    );
    if (!userUpdated) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
        data: null,
      });
    }
    res.json(userUpdated);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

router.delete('/:id', async function (req, res) {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
        data: null,
      });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

export default router;
