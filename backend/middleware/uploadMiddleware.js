import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => ({
    folder: 'your-folder-name', // replace with your folder
    resource_type: file.mimetype.startsWith('video/') ? 'video' : 'image',
    format: file.mimetype.split('/')[1], // jpg, png, mp4, etc.
  }),
});

const upload = multer({ storage });

export default upload;
