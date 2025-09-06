import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ItemRouter from "./routes/itemRouter.js"; 
import userRouter from"./routes/userRouter.js";


dotenv.config();

const app = express();

// database connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/items", ItemRouter);
app.use("/api/users", userRouter);

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
