import mongoose, { ObjectId, Schema, model } from "mongoose";
import { BookReadStatus } from "../Enum/BookReadStatus.js";
import { Genre } from "../Enum/Genre.js";
import { IReview, reviewSchema } from "./Review.js";

export interface IBookRead {
  _id: ObjectId;
  title: string;
  author: {
    _id: ObjectId;
    name: string;
  };
  pages: number;
  genre: Genre[];
  stars?: number;
  status: BookReadStatus;
  cover: string;
  review?: IReview;
  started: Date;
  finished?: Date;
}

const objectId = mongoose.Schema.Types.ObjectId;

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
    id: {
      type: objectId,
      refPath: "authorModel",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    authorModel: {
      type: String,
      required: true,
      enum: ["Authors"],
    },
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
