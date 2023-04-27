import { ObjectId, Schema, model } from "mongoose";
import { Genre } from "./Genre";

export interface IBook {
  _id?: ObjectId;
  title: string;
  author: string;
  pages: number;
  genre: Genre;
  stars: number[];
  cover: string;
  synopsis: string;
  reviews: string[];
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
    type: Genre,
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
