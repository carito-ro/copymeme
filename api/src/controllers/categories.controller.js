import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
    helpers.getAll('categories', {}, req, res);
});

export default router;