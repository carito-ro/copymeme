import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';


export const VoteSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    meme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'meme'
    },
    type: String
});

export const Votes = model('votes', VotesSchema, 'votes');