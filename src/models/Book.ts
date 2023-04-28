import { ObjectId, Schema, model } from "mongoose";
import { Genre, genreSchema } from "./Genre.js";

export interface IBook {
  _id?: ObjectId;
  title: string;
  author: string;
  pages: number;
  genre: Genre;
  cover: string;
  synopsis: string;
  stars?: number[];
  reviews?: string[];
}

export const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  stars: {
    type: [Number],
  },
  cover: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  reviews: {
    type: [String],
  },
});

export default model<IBook>("Books", bookSchema);
