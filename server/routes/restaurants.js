import express from "express"
import {addReview, createRestaurant, deleteRestaurants, getAllRestaurants, getRestaurant, getReviews, updateRestaurant} from "../controllers/restaurants.js"

const router = express.Router();

router.get("/", getAllRestaurants);

router.get("/:id", getRestaurant);

router.post("/", createRestaurant);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurants);

router.post("/:id/reviews", addReview);

router.get("/:id/reviews", getReviews);

export default router