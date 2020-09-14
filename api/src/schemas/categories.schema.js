var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/copymeme');

const categorySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String
});

export default mongoose.model('Category', categorySchema, 'categories');
