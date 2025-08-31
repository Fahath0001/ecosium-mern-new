import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/uploadMiddleware.js';
import { addEventArtist } from '../controllers/eventArtistController.js';


const eventArtistRouter =  express.Router();

eventArtistRouter.post('/add', adminAuth, upload.array('mediaFiles', 6), addEventArtist)

export default eventArtistRouter;