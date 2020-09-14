var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/copymeme');

const voteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    meme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meme',
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

export default mongoose.model('Vote', voteSchema, 'votes');
