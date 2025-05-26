import express from 'express';
import { addEvent, listEvent, removeEvent, findEvent } from '../controllers/eventController.js';
import upload from '../middleware/uploadMiddleware.js';  // import the multer+cloudinary upload middleware
import adminAuth from '../middleware/adminAuth.js';

const eventRouter = express.Router();

eventRouter.post('/add', adminAuth, upload.array('mediaFiles', 10), addEvent);
eventRouter.get('/list', adminAuth, listEvent);
eventRouter.post('/remove', removeEvent);
eventRouter.post('/find', findEvent);

export default eventRouter;
