import express from "express";
import { json } from "body-parser";
import memeRoutes from "./controllers/meme.controller";
import memeRoutes from "./controllers/meme.controller";
import commentRoutes from "./controllers/comment.controller";
import votesRoutes from "./controllers/votes.controller";
import categoriesRoutes from "./controllers/categories.controller";


const app = express();
app.use(json());

app.use('/meme', memeRoutes);
app.use('/comment', commentRoutes);
app.use('/votes', votesRoutes);
app.use('/categories', categoriesRoutes);

app.get('/api/v1/status', (req, res) => {
    res.status(200).send({
        message: 'OK'
    });
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
