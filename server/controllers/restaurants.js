import db from "../db/index.js"
import { CustomError } from "../errors/CustomError.js";
import { NotFoundError } from "../errors/NotFoundError.js";

export async function getAllRestaurants(req, res, next){
    try{
        
        const results = await db.query("SELECT * FROM restaurants");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results["rows"]
            }
        })
    }catch(err){
        next(new NotFoundError(err.message));
    }
    
}

export async function getRestaurant(req, res, next){
    try{
        const results = await db.query(`SELECT * FROM restaurants WHERE id=$1`, [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: results["rows"]
            }
        })
    }catch(err){
        next(new NotFoundError(err.message));
    }
    
}

export async function createRestaurant(req, res, next){
    try{
        const results = await db.query(`INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *`, [req.body.name, req.body.location, req.body.price_range]);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: results["rows"]
            }
        })
    }catch(err){
        next(new CustomError(err.message, 500));
    }
}

export async function updateRestaurant(req, res, next){
    try{
        console.log(` restaurants SET ${req.body.name && "name=$1,"} ${req.body.location && "location=$2,"} ${req.body.price_range && "price_range=$3"} WHERE id=$4`)
        const results = await db.query(`UPDATE restaurants SET name=$1, location=$2 , price_range=$3 WHERE id=$4 RETURNING *`, [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: results["rows"]
            }
        })
    }catch(err){
        next(new CustomError(err.message, 500));
    }
}

export async function deleteRestaurants(req, res, next){
    try{
        console.log(` restaurants SET ${req.body.name && "name=$1,"} ${req.body.location && "location=$2,"} ${req.body.price_range && "price_range=$3"} WHERE id=$4`)
        const results = await db.query(`DELETE FROM restaurants WHERE id=$1 RETURNING *`, [ req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: results["rows"]
            }
        })
    }catch(err){
        next(new CustomError(err.message, 500));
    }
}