import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/:memeId', async function (req, res) {
    helpers.getAll('votes', { meme: memeId }, req, res);
});

router.post('/', async function (req, res) {
    const vote = req.query;
    helpers.insert('votes', vote, req, res);
});

export default router;