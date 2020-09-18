import express from 'express';
import Meme from '../schemas/meme.schema'
const router = express.Router();

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const meme = await Meme.findById(id).populate('author', 'name email').populate('category');
        if (!meme) {
            return res.status(404).send({
                success: false,
                message: 'Vote not found',
                data: null,
            });
        }
        res.json(meme);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null,
        });
    }
});

router.get('/', async function (req, res) {
    try {
        let query = {};
        let memes = [];
        if (req.query.categoryId) {
            query.category = req.query.categoryId;
        };
        if (req.query.limit) {
            let start = 0;
            if (req.query.start) {
                start = parseInt(req.query.start);
            }
            memes = await Meme.find(query).skip(start).limit(parseInt(req.query.limit)).populate('author', 'name email').populate('category');
        } else {
            memes = await Meme.find(query).populate('author', 'name email').populate('category');
        }
        if (!memes) {
            return res.status(404).send({
                success: false,
                message: "Memes not found",
                data: null,
            });
        }
        res.json(memes);
    } catch (err) {
        res.json({ error: err });
    }
});

router.post('/', async function (req, res) {
    const { author, title, image, description, category } = req.body;
    try {
        const meme = new Meme({
            author,
            title,
            image,
            description,
            category
        });
        meme.positiveVotesCount = 0;
        meme.negativeVotesCount = 0;
        const newMeme = await meme.save();
        res.json(newMeme);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null,
        });
    }
});

export default router;