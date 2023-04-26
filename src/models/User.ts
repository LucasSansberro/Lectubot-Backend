import { Schema, model } from "mongoose";

const userSchema = new Schema(
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
    guilds: {
      type: Array,
      required: true,
    },
    books: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
