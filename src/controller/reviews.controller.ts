import { Request, Response } from "express";
import {
  getAllReviewsService,
  getReviewByIdService,
  postReviewService,
  editReviewByIdService,
  deleteReviewByIdService,
} from "../services/reviews.service";

export const getAllReviewsController = async (req: Request, res: Response) => {
  try {
    const allReviews = await getAllReviewsService();
    res.json({ allReviews });
  } catch (e) {
    res.json(e);
  }
};

export const getReviewByIdController = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const reviewFound = await getReviewByIdService(reviewId);

    res.json({ reviewFound });
  } catch (e) {
    res.json(e);
  }
};

export const postReviewController = async (req: Request, res: Response) => {
  try {
    const newReview = req.body;
    const reviewCreated = await postReviewService(newReview);

    res.json({ reviewCreated });
  } catch (e) {
    res.json(e);
  }
};

export const editReviewByIdController = async (req: Request, res: Response) => {
  try {
    const updatedReview = req.body;
    const reviewId = req.params.id;
    const reviewSuccessfullyUpdated = await editReviewByIdService(reviewId, updatedReview);

    res.json({ reviewSuccessfullyUpdated });
  } catch (e) {
    res.json(e);
  }
};

export const deleteReviewByIdController = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const reviewDeleted = deleteReviewByIdService(reviewId);

    res.json({ reviewDeleted });
  } catch (e) {
    res.json(e);
  }
};
