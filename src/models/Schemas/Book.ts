import mongoose, { ObjectId, Schema, model } from "mongoose";
import { Genre } from "../Enum/Genre.js";
import { IReview, reviewSchema } from "./Review.js";

export interface IBook {
  _id?: ObjectId;
  title: string;
  author: {
    _id: ObjectId;
    name: string;
  };
  pages: number;
  genre: Genre[];
  cover: string;
  synopsis: string;
  stars?: number[];
  reviews?: IReview[];
}
const objectId = mongoose.Schema.Types.ObjectId;

export const bookSchema: Schema<IBook> = new Schema<IBook>(
  {
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
      type: [reviewSchema],
    },
  },
  { timestamps: true }
);

export const Book = model<IBook>("Books", bookSchema);