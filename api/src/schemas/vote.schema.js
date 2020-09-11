import { Schema, model } from 'mongoose';

export const VoteSchema = new Schema({
    id: Schema.Types.ObjectId,
    authos: Schema.Types.ObjectId,
    type: String
});

export const Category = model('vote', VoteSchema, 'vote');