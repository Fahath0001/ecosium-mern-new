import eventModel from '../models/eventModel.js';
import { v2 as cloudinary } from 'cloudinary';


// Function for add event
import MediaModel from '../models/Media.js';

const addEvent = async (req, res) => {
  try {
    const {
      name,
      tickets,
      category,
      description, // ✅ correct spelling now
      bestSeller
    } = req.body;





    // ✅ Upload media to Cloudinary
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
          videoDuration: uploadResult.resource_type === 'video'
            ? Math.floor(uploadResult.duration || 0)
            : null,
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
    if (!name ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, tickets, category, or description"
      });
    }


    const eventData = {
      name,
      tickets: tickets ? JSON.parse(tickets) : [],
      category: category ? JSON.parse(category) : [],
      description, // ✅ updated here too
      bestSeller: bestSeller === "true" || bestSeller === true,
      media: mediaArray
    };




    const event = new eventModel(eventData);
    await event.save();

    res.status(201).json({
      success: true,
      message: "Successfully added event",
      eventId: event._id,
    });

  } catch (error) {
    console.error("Add Event Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
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