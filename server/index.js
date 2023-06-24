import dotenv from "dotenv"
import express from "express"
import restaurantRouter from "./routes/restaurants.js"
import { handler } from "./errors/index.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/v1/restaurants", restaurantRouter)

/* Error Handler */
app.use(handler);

const port = process.env.PORT || 3001;
app.listen(port, async() => {
    try{
        console.log(`server is being listened ${port}`);
        console.log(`${process.env.PG_HOST}`);
    }catch(err){
        console.log(err);
    }
} )