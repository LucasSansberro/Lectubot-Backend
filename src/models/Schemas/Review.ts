import mongoose, { ObjectId, Schema } from "mongoose";

export interface IReview {
  _id?: ObjectId;
  user_id: ObjectId;
  book_id: ObjectId;
  content: String;
  likes: number;
}

const objectId = mongoose.Schema.Types.ObjectId;

export const reviewSchema = new Schema<IReview>({
  user_id: {
    type: objectId,
    required: true,
  },
  book_id: {
    type: objectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});
