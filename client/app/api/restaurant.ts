import { Restaurant } from "../page"

export const baseUrl = "http://localhost:4000/api/v1/restaurants"

export const fetchAllRestaurants = async () => {
    const data = await fetch(baseUrl, {cache: "no-cache"});
    const restaurants = await data.json();
    return restaurants;

}