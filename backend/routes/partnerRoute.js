import express from 'express';
import { patnerDoumentsUplodes, patnerLogin, patnreRegister,findPatnerStatus,updatePatnerStatus ,ListPatnerStatus, findPatner } from '../controllers/patnerController.js';
import upload from '../middleware/uploadMiddleware.js';

const patnerRouter = express.Router();


patnerRouter.post('/login', patnerLogin);
patnerRouter.post('/register', patnreRegister);
patnerRouter.put('/updatestatus', updatePatnerStatus);
patnerRouter.put('/:id',upload.array('mediaFiles', 4), patnerDoumentsUplodes);
patnerRouter.get('/status', findPatnerStatus);
patnerRouter.get('/list', ListPatnerStatus);
patnerRouter.get('/:id', findPatner);

export default patnerRouter;