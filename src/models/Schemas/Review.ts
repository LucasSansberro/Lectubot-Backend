import mongoose, { ObjectId, Schema, model } from "mongoose";

export interface IReview {
  _id?: ObjectId;
  user_id: ObjectId;
  book_id: ObjectId;
  content: String;
  likes: number;
}

const objectId = mongoose.Schema.Types.ObjectId;

export const reviewSchema: Schema<IReview> = new Schema<IReview>({
  user_id: {
    type: objectId,
    ref:"Users",
    required: true,
  },
  book_id: {
    type: objectId,
    ref:"Books",
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

export const Review = model<IReview>("Reviews", reviewSchema);