import { ObjectId, Schema, model } from "mongoose";
import { Genre } from "../Enum/Genre.js";
import { IAuthor, authorSchema } from "./Author.js";
import { IReview, reviewSchema } from "./Review.js";


export interface IBook {
  _id?: ObjectId;
  title: string;
  author: IAuthor;
  pages: number;
  genre: Genre[];
  cover: string;
  synopsis: string;
  stars?: number[];
  reviews?: IReview[];
}

export const bookSchema: Schema<IBook> = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: authorSchema,
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

export default model<IBook>("Books", bookSchema);
