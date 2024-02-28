import { ObjectId, Schema, model } from "mongoose";
import { Genre } from "../Enum/Genre.js";
import { IBook, bookSchema } from "./Book.js";

export interface IAuthor {
  _id?: ObjectId;
  name: string;
  image?: string;
  nationality: string;
  genre: Genre[];
  books?: IBook[];
}

export interface AuthorName {
  _id?: ObjectId;
  name: string;
}

export const authorSchema: Schema<IAuthor> = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
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
  },
});

export const Author = model<IAuthor>("Authors", authorSchema);
