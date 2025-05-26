import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import eventRouter from './routes/eventRoute.js';
import mediaRouter from './routes/mediaRoute.js';
import patnerRouter from './routes/partnerRoute.js';


//App Confiq
const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// midgleware

app.use(express.json());
app.use(cors());

// api endpoints

// api endpoints user
app.use('/api/user', userRouter);



// api endpoints events
app.use('/api/event', eventRouter)




// api endpoints parner
app.use('/api/partner', patnerRouter);


// api endpoints Media
app.use('/api/upload-media', mediaRouter)



app.get('/', (req,res) => {
    res.send("✅ ecosium API Working")
})

app.listen(port, () => console.log('✅ Server started on PORT : ' + port));
