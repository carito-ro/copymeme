var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/copymeme');

const categorySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('Category', categorySchema, 'categories');
