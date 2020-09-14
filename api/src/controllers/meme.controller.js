import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
    helpers.getAll('meme', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
    const nombre = req.params.nombre;
    helpers.getAll('meme', { nombre: nombre }, req, res);
});

router.post('/', async function (req, res) {
    const meme = req.query;
    helpers.insert('meme', meme, req, res);
});


export default router;