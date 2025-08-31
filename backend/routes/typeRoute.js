import express from "express";
import { addType, updateType } from "../controllers/typeController.js";
import upload from "../middleware/uploadMiddleware.js";
import adminAuth from "../middleware/adminAuth.js";


const typeRouter = express.Router();

typeRouter.post('/add', upload.array('mediaFiles', 7), addType);
typeRouter.put('/:id', upload.array('mediaFiles', 7), updateType);

export default typeRouter;