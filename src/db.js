import { connect } from "mongoose";
import ENV from "./config.js"

const {URLMONGO} = ENV
connect(URLMONGO)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));
