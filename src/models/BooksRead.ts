import { ObjectId, Schema } from "mongoose";
import { BookReadStatus, bookReadStatusSchema } from "./BookReadStatus.js";
import { Genre, genreSchema } from "./Genre.js";

export interface BooksRead {
  _id: ObjectId;
  title: string;
  author: string;
  pages: number;
  genre: Genre;
  stars?: number;
  status: BookReadStatus;
  cover: string;
  review?: string;
}

export const booksReadSchema = new Schema<BooksRead>({
  _id: {
    type: String,
    required: true,
  },
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
    type: Number,
  },
  status: {
    type: bookReadStatusSchema,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
});
