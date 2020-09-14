import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';


export const MemeSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    image: String,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    positiveVotesCount: Number,
    negativeVotesCount: Number

});

export const Meme = model('meme', MemeSchema, 'meme');