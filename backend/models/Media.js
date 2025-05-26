import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  mediaUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String, // 'image' or 'video'
    required: true,
  },
  videoDuration: {
    type: Number, // duration in seconds (only for videos)
    default: null,
  },
}, { timestamps: true });

const MediaModel = mongoose.model('Media', mediaSchema);

export default MediaModel;
