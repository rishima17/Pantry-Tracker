 import express from "express";
 import { addItem, updateItem,getExpiringSoon,getItems,deleteItem} from "../controllers/itemsController.js"
 const ItemRouter = express.Router();

 import { authMiddleware } from "../middlewares/auth.js";

 //middleware
 ItemRouter.use(authMiddleware);



ItemRouter.get("/", getItems);


ItemRouter.post("/add", addItem);


ItemRouter.put("/update/:id", updateItem);


ItemRouter.delete("/delete/:id", deleteItem);

ItemRouter.get("/expiring/soon", getExpiringSoon);

export default ItemRouter;