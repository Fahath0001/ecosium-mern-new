import { v2 as cloudinary } from 'cloudinary';
import eventCategoryModel from '../models/eventCategoryModel.js';

// Function for add event
import MediaModel from '../models/Media.js';

const addEventCategory = async (req, res) => {
  try {
    const {
      categoryName,
      isActive,
    } = req.body;

    // Upload media files to Cloudinary and save in MediaModel
    const mediaArray = [];
    if (req.files && req.files.length > 0) {

      for (const file of req.files) {
        const uploadResult = await cloudinary.uploader.upload(file.path, {
          resource_type: 'auto',
          folder: 'your-folder-name',
        });

        const newMedia = new MediaModel({
          mediaUrl: uploadResult.secure_url,
          type: uploadResult.resource_type,
          videoDuration: uploadResult.resource_type === 'video' ? Math.floor(uploadResult.duration) : null,
        });

        const savedMedia = await newMedia.save();

        mediaArray.push({
          id: savedMedia._id,
          mediaUrl: savedMedia.mediaUrl,
          type: savedMedia.type,
          videoDuration: savedMedia.videoDuration,
        });
      }
    }

    const eventCategoryData = {
      categoryName,
      isActive,
      heroMedia: mediaArray
    }

    const eventCategory = new eventCategoryModel(eventCategoryData);
    await eventCategory.save();

    res.status(201).json({
      success: true,
      message: "Successfully added your Event Category",
      eventCateguryId: eventCategory._id,
      eventCategory
    })
  } catch (error) {
    console.error("Add Event Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


// Function for list event
const listEventCategories = async (req, res) => {
  try {
    const eventcategories = await eventCategoryModel.find({})
    res.json({
      success: true,

      eventcategories
    })

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })

  }
}


export { addEventCategory, listEventCategories};