import mongoose, { ObjectId, Schema, model } from "mongoose";
import { BookReadStatus } from "../Enum/BookReadStatus.js";
import { Genre } from "../Enum/Genre.js";
import { IReview, reviewSchema } from "./Review.js";

export interface IBookRead {
  _id: ObjectId;
  book_id: ObjectId;
  user_id: ObjectId;
  stars?: number;
  status: BookReadStatus;
  review?: IReview;
  started: Date;
  finished?: Date;
}

const objectId = mongoose.Schema.Types.ObjectId;

export const bookReadSchema: Schema<IBookRead> = new Schema<IBookRead>({
  book_id: {
    type: objectId,
    ref: "Books",
    required: true,
  },
  user_id: {
    type: objectId,
    ref: "IUser",
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
