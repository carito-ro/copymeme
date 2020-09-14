import express from 'express';
import Category from '../schemas/categories.schema'
const router = express.Router();

router.get('/', async function (req, res) {
    try {
        const categories = await Category.find({});
        if (!categories) {
            return res.status(404).send({
                success: false,
                message: "Categories not found",
                data: null,
            });
        }
        res.json(categories);
    } catch (err) {
        res.json({ error: err });
    }
});

export default router;