import express from 'express';
import { addEvent, listEvent, removeEvent, findEvent }from '../controllers/eventController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const eventRouter = express.Router();

eventRouter.post('/add',adminAuth, upload.fields([{name:'image1',maxCount:1},{ name: 'image2', maxCount: 1 },{name:'image3',maxCount:1},{ name: 'image4', maxCount: 1 }]), addEvent);
eventRouter.get('/list',adminAuth, listEvent);
eventRouter.post('/remove', removeEvent);
eventRouter.post('/find', findEvent);

export default eventRouter;
