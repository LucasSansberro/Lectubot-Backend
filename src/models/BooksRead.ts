import { ObjectId, Schema } from "mongoose";
import { BookReadStatus } from "./BookReadStatus";
import { Genre } from "./Genre";

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
    type: Genre,
    required: true,
  },
  stars: {
    type: Number,
  },
  status: {
    type: BookReadStatus,
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
