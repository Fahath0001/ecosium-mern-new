import express from 'express';
import { addEventCategory, listEventCategories } from '../controllers/eventCategoryController.js';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/uploadMiddleware.js';


const evenCategoryRouter = express.Router();

evenCategoryRouter.post('/add', adminAuth, upload.array('mediaFiles', 6), addEventCategory);
evenCategoryRouter.get('/list-category', listEventCategories);

export default evenCategoryRouter;