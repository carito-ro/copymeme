import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/:memeId', async function (req, res) {
    helpers.getAll('votes', {}, req, res);
});

router.post('/:memeId', async function (req, res) {
    const meme = req.query;
    helpers.insert('votes', meme, req, res);
});