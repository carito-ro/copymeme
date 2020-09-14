import { Schema, model } from 'mongoose';

export const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    email: String,
    username: String,
    password: String
});

export const User = model('user', UserSchema, 'user');