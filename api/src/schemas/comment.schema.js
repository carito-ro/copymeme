import { Schema, model } from 'mongoose';

export const CommentSchema = new Schema({
    id: Schema.Types.ObjectId,
    content: String,
    author: Schema.Types.ObjectId,
    meme: Schema.Types.ObjectId,
    parent: Number
});

export const Category = model('comment', CommentSchema, 'comment');