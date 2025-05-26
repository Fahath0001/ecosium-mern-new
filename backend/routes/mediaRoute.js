import express from 'express';
import upload from '../middleware/uploadMiddleware.js';  // import the multer+cloudinary upload middleware
import { uploadMedia } from '../controllers/mediaController.js';

const mediaRouter = express.Router();

// POST /api/upload-media/ (because main app uses '/api/upload-media')
mediaRouter.post('/', upload.array('mediaFiles', 10), uploadMedia);

export default mediaRouter;

