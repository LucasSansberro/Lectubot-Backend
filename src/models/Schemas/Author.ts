import { ObjectId, Schema, model } from "mongoose";
import { Genre } from "../Enum/Genre.js";
import { IBook, bookSchema } from "./Book.js";

export interface IAuthor {
  _id?: ObjectId;
  name: string;
  nationality: string;
  genre: Genre[];
  books: IBook[];
}

export const authorSchema: Schema<IAuthor> = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    enum: Genre,
    required: true,
  },
  books: {
    type: [bookSchema],
    required: true,
  },
});

export const Author = model<IAuthor>("Authors", authorSchema);