import MediaModel from '../models/Media.js';
import { v2 as cloudinary } from 'cloudinary';

export const uploadMedia = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const mediaArray = [];

    for (const file of req.files) {
      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        resource_type: 'auto',  // auto detects image/video
        folder: 'your-folder-name', // optional folder
      });

      const newMedia = new MediaModel({
        mediaUrl: uploadResult.secure_url,
        type: uploadResult.resource_type, // 'image' or 'video'
        videoDuratiMedia: uploadResult.resource_type === 'video' ? uploadResult.duration : null,
      });

      const savedMedia = await newMedia.save();
      mediaArray.push({
        id: savedMedia._id,
        mediaUrl: savedMedia.mediaUrl,
        type: savedMedia.type,
        videoDuration: savedMedia.videoDuration,
      });
    }

    res.status(201).json({
      message: 'Media uploaded and saved',
      media: mediaArray,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Server error during upload' });
  }
};
