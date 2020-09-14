var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/copymeme');

export const commentSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    meme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meme',
        required: true
    }
});

export default mongoose.model('Comment', commentSchema, 'comments');