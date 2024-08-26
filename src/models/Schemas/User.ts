import { model, ObjectId, Schema } from "mongoose";

export interface IUser {
  _id?: ObjectId;
  discordId: string;
  username: string;
  avatar: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>(
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
  },
  { timestamps: true }
);

export const User = model<IUser>("Users", userSchema);
