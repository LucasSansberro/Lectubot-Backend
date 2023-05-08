import { Router } from "express";
import {
  getAllReviewsController,
  getReviewByIdController,
  postReviewController,
  editReviewByIdController,
  deleteReviewByIdController,
} from "../controller/reviews.controller.js";
import { isAuthorized } from "../utils/auth.js";

const reviewsRouter = Router();

reviewsRouter.get("/", getAllReviewsController);
reviewsRouter.get("/:id", isAuthorized, getReviewByIdController);
reviewsRouter.post("/", isAuthorized, postReviewController);
reviewsRouter.put("/:id", isAuthorized, editReviewByIdController);
reviewsRouter.delete("/:id", isAuthorized, deleteReviewByIdController);

export default reviewsRouter;
