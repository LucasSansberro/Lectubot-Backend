import { model, ObjectId, Schema } from "mongoose";
import { BooksRead, booksReadSchema } from "./BooksRead.js";

export interface IUser {
  _id?: ObjectId;
  discordId: string;
  username: string;
  avatar: string;
  books: BooksRead[];
}

const userSchema = new Schema<IUser>(
  {
    discordId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    books: {
      type: [booksReadSchema],
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
