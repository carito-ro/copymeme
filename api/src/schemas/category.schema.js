import { Schema, model } from 'mongoose';

export const CategorySchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String
});

export const Category = model('category', CategorySchema, 'category');