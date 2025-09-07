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

const app = express();
const port = process.env.PORT || 4000;

// Connect DB & Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());

// ✅ CORS configuration
const allowedOrigins = [
  "http://localhost:5174",     // Vite dev server
  "https://ecosium.ae",        // Main domain
  "https://www.ecosium.ae",    // Main domain (www)
  "https://admin.ecosium.ae",  // Admin panel
  "https://merchant.ecosium.ae"// Merchant panel
];




app.use(cors({
  origin: '*',          // allow all origins temporarily
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));


// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);
app.use('/api/eventcategories', evenCategoryRouter);
app.use('/api/event-artist', eventArtistRouter);
app.use('/api/type', typeRouter);
app.use('/api/partner', patnerRouter);
app.use('/api/serial', idNumberRouter);
app.use('/api/upload-media', mediaRouter);

// Test route
app.get('/', (req, res) => {
  res.send("✅ ecosium API Working");
});

// Start server
app.listen(port, '0.0.0.0', () => 
  console.log('✅ Server started on PORT : ' + port)
);
