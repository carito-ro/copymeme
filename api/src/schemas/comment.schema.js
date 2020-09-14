import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';


export const CommentSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    meme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'meme'
    }

});

export const Category = model('comment', CommentSchema, 'comment');