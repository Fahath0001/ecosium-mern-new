import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import eventRouter from './routes/eventRoute.js';
import mediaRouter from './routes/mediaRoute.js';
import patnerRouter from './routes/partnerRoute.js';
import typeRouter from './routes/typeRoute.js';
import evenCategoryRouter from './routes/eventCategory.js';
import eventArtistRouter from './routes/eventArtistRoute.js';
import idNumberRouter from './routes/idNumberRoute.js';


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

// api endpoints events Category
app.use('/api/eventcategories', evenCategoryRouter)

// api endpoints events Artist's
app.use('/api/event-artist', eventArtistRouter)



// api endpoints types
app.use('/api/type', typeRouter)


// api endpoints parner
app.use('/api/partner', patnerRouter);

// api endpoints Serial Number
app.use('/api/serial', idNumberRouter);


// api endpoints Media
app.use('/api/upload-media', mediaRouter)



app.get('/', (req,res) => {
    res.send("✅ ecosium API Working")
})

app.listen(port, '0.0.0.0', () => console.log('✅ Server started on PORT : ' + port));

