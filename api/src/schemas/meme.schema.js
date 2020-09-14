var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/copymeme');

export const MemeSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    positiveVotesCount: Number,
    negativeVotesCount: Number
});

export default mongoose.model('Meme', MemeSchema, 'memes');
