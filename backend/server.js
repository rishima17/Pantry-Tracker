import express from "express";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());



const PORT = 8080;
app.listen(PORT, () => console.log(` Server is listening on port ${PORT}`));
