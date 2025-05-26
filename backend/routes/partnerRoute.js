import express from 'express';
import { patnerLogin, patnreRegister } from '../controllers/patnerController.js';

const patnerRouter = express.Router();


patnerRouter.post('/login', patnerLogin);
patnerRouter.post('/register', patnreRegister);


export default patnerRouter;