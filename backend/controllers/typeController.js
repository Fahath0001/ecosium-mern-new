
import { v2 as cloudinary } from 'cloudinary';

// Function for add event
import MediaModel from '../models/Media.js';
import typeModel from '../models/typeModel.js';

const addType = async (req, res) => {
    try {
        const {
            title,
            isPartner,
            isFrontEnd
        } = req.body

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

        const typeData = {
            title,
            heroMedia : mediaArray,
            isPartner,
            isFrontEnd
        };
        const type = new typeModel(typeData);
        await type.save();

        res.json({
            success: true,
            message: "Business Type Successfully Added"
        });

    } catch (error) {
        console.error("Add Event Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const updateType = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isPartner, isFrontEnd } = req.body;

    const type = await typeModel.findById(id);
    if (!type) {
      return res.status(404).json({
        success: false,
        message: "Type not found"
      });
    }

    // Update basic fields
    if (title !== undefined) type.title = title;
    if (isPartner !== undefined) type.isPartner = isPartner;
    if (isFrontEnd !== undefined) type.isFrontEnd = isFrontEnd;

    // Handle new media upload
    if (req.files && req.files.length > 0) {
      const newMediaArray = [];

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

        newMediaArray.push({
          id: savedMedia._id,
          mediaUrl: savedMedia.mediaUrl,
          type: savedMedia.type,
          videoDuration: savedMedia.videoDuration,
        });
      }

      // Append new media to existing media array
      type.heroMedia.push(...newMediaArray);
    }

    await type.save();

    res.json({
      success: true,
      message: "Type successfully updated",
      data: type,
    });

  } catch (error) {
    console.error("Update Type Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export {addType, updateType} 