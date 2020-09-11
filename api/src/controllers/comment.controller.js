import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/:memeId', async function (req, res) {
    helpers.getAll('comment', {}, req, res);
});

router.post('/:memeId', async function (req, res) {
    const meme = req.query;
    helpers.insert('comment', meme, req, res);
});