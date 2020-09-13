import usersRoutes from './controllers/users';
import loginRoutes from './controllers/login';

const express = require('express'),
  config = require('./configs/config'),
  bodyParser = require('body-parser');

const app = express();
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
app.get('/', function (req, res) {
  res.send('Inicio');
});

const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
  const token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, app.get('llave'), (err, decoded) => {
      if (err) {
        return res.json({ mensaje: 'Token inválida' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: 'Token no proveída.',
    });
  }
});

app.get('/api/v1/status', (req, res) => {
  res.status(200).send({
    message: 'OK',
  });
});

//app.use('/users', rutasProtegidas, usersRoutes);// para protejer las urls
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
