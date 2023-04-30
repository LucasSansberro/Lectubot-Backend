import { ObjectId, Schema, model } from "mongoose";
import { BookReadStatus } from "../Enum/BookReadStatus.js";
import { Genre } from "../Enum/Genre.js";
import { IReview, reviewSchema } from "./Review.js";

export interface IBookRead {
  _id: ObjectId;
  title: string;
  author: string;
  pages: number;
  genre: Genre[];
  stars?: number;
  status: BookReadStatus;
  cover: string;
  review?: IReview;
  started: Date;
  finished?: Date;
}

export const bookReadSchema: Schema<IBookRead> = new Schema<IBookRead>({
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
    type: [String],
    enum: Genre,
    required: true,
  },
  stars: {
    type: Number,
  },
  status: {
    type: String,
    enum: BookReadStatus,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  review: {
    type: reviewSchema,
  },
  started: {
    type: Date,
    required: true,
  },
  finished: {
    type: Date,
  },
});

export const BookRead = model<IBookRead>("BooksRead", bookReadSchema);
