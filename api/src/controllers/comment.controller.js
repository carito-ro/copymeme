import express from 'express';
import Comment from '../schemas/comment.schema';
const router = express.Router();

router.get('/:idMeme', async function (req, res) {
    try {
        const idMeme = req.params.idMeme;
        const comments = await Comment.find({
            meme: idMeme,
        }).populate('author', 'name email');
        if (!comments) {
            return res.status(404).send({
                success: false,
                message: 'Comments not found',
                data: null,
            });
        }
        res.json(comments);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null,
        });
    }
});

router.post('/', async function (req, res) {
    const { author, meme, content } = req.body;
    try {
        const comment = new Comment({
            author,
            meme,
            content
        });
        const newComment = await comment.save();
        res.json(newComment);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null,
        });
    }
});

export default router;