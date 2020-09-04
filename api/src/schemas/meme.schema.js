import { Schema, model } from 'mongoose';

export const MemeSchema = new Schema({
    id: Schema.Types.ObjectId,
    author:
        String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'user'
    title: String,
    image: String,
    description: String,
    category:
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'category'
        String,
    positiveVotesCount: Number,
    negativeVotesCount: Number

});

export const Meme = model('meme', MemeSchema, 'meme');