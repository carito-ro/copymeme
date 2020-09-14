import express from 'express';
import { helpers } from '../helpers';
import * as mongoose from 'mongoose';

const router = express.Router();

router.get('/:memeId', async function (req, res) {
    const id = new mongoose.Types.ObjectId(req.query.memeId); //Esto es lo que no anda
    helpers.getAll('comment', { meme: id }, req, res);
});

router.post('/', async function (req, res) {
    const comment = req.query;
    helpers.insert('comment', comment, req, res);
});

export default router;