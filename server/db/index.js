import pkg from "pg"
import dotenv from "dotenv"
dotenv.config();

const {Pool} = pkg

export const pool = new Pool({
host: process.env.PG_HOST,
user: process.env.PG_USER,
database: process.env.PG_DATABASE,
password: process.env.PG_PASSWORD,
port: process.env.PG_PORT
});


const query = (text, params) => pool.query(text, params);

export default {query};
