import { Schema, model } from 'mongoose';

export const CategoriesSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String
});

export const Category = model('categories', CategoriesSchema, 'categories');