import { Request, Response } from "express";
import {
  getReviewsService,
  getReviewByIdService,
  postReviewService,
  editReviewByIdService,
  deleteReviewByIdService,
} from "../services/reviews.service.js";
import { IReview } from "../models/Schemas/Review.js";

export const getReviewsController = async (req: Request, res: Response) => {
  try {
    const reviews: IReview[] = await getReviewsService();
    res.json({ success: true, data: [...reviews], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getReviewByIdController = async (req: Request, res: Response) => {
  try {
    const reviewId: string = req.params.id;
    const reviewFound: IReview = await getReviewByIdService(reviewId);

    res.json({ success: true, data: { ...reviewFound }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const postReviewController = async (req: Request, res: Response) => {
  try {
    const newReview: IReview = req.body;
    const reviewCreated: IReview = await postReviewService(newReview);

    res.json({ success: true, data: { ...reviewCreated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400).status(400);
  }
};

export const editReviewByIdController = async (req: Request, res: Response) => {
  try {
    const updatedReview: IReview = req.body;
    const reviewId: string = req.params.id;
    const reviewSuccessfullyUpdated: IReview = await editReviewByIdService(reviewId, updatedReview);

    res.json({ success: true, data: { ...reviewSuccessfullyUpdated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const deleteReviewByIdController = async (req: Request, res: Response) => {
  try {
    const reviewId: string = req.params.id;
    const reviewDeleted: string = await deleteReviewByIdService(reviewId);

    res.json({ success: true, data: reviewDeleted, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};
