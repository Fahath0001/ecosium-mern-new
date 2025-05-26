import eventModel from '../models/eventsModel.js';
import { v2 as cloudinary } from 'cloudinary';


// Function for add event
import MediaModel from '../models/Media.js';

const addEvent = async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      subCategory,
      discriptions,
      bestSeller,
      eventDate
    } = req.body;

    // Convert eventDate
    let formattedEventDate = null;
    if (eventDate) {
      const [day, month, year] = eventDate.split('/');
      formattedEventDate = new Date(`${year}-${month}-${day}`);
    }

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

    console.log(mediaArray);


    const eventData = {
      name,
      price: Number(price),
      category: JSON.parse(category),
      subCategory,
      discriptions,
      bestSeller: bestSeller === "true",
      media: mediaArray,
      eventDate: formattedEventDate,
    };

    const event = new eventModel(eventData);
    await event.save();

    res.json({
      success: true,
      message: "Successfully added event",
      eventId: event._id
    });

  } catch (error) {
    console.error("Add Event Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// Function for list event
const listEvent = async (req, res) => {
  try {
    const events = await eventModel.find({})
    res.json({
      success: true,
      events
    })

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })

  }
}

// Function for remove event
const removeEvent = async (req, res) => {
  try {
    const eventId = req.body.id;
    const isEventAvailable = await eventModel.findOne({ _id: eventId });

    if (isEventAvailable) {
      await eventModel.findByIdAndDelete(eventId);
      return res.json({
        success: true,
        message: "Event Removed"
      });
    }

    res.json({
      success: false,
      message: "This is a wrong ID"
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

// Function for single event
const findEvent = async (req, res) => {
  try {
    const eventId = req.body.id;
    const event = await eventModel.findOne({ _id: eventId });
    if (event) {
      res.json({
        success: true,
        event
      });
    }
    res.json({
      success: 201,
      message: "This Event is not awailable"
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });

  }
}

export { addEvent, listEvent, removeEvent, findEvent };