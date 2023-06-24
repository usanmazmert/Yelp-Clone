import express from "express"
import {createRestaurant, deleteRestaurants, getAllRestaurants, getRestaurant, updateRestaurant} from "../controllers/restaurants.js"

const router = express.Router();

router.get("/", getAllRestaurants);
router.get("/:id", getRestaurant);

router.post("/", createRestaurant);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurants);

export default router