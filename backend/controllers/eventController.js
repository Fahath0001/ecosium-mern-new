import { v2 as cloudinary } from 'cloudinary';
import eventModel from '../models/eventsModel.js';


// Function for add event
const addEvent = async (req, res) => {
  try {

    const { name, price, category, subCategory, discriptions, bestSeller, eventDate } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];


    const images = [image1, image2, image3, image4].filter((item) => {
      return item !== undefined
    });

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url
      })
    )

    // if uploade the  Vedio

    /*
    
    let mediaUrls = await Promise.all(
  mediaFiles.map(async (item) => {
    const isVideo = item.mimetype?.startsWith('video') || item.path.endsWith('.mp4'); // basic check
    let result = await cloudinary.uploader.upload(item.path, {
      resource_type: isVideo ? 'video' : 'image'
    });
    return result.secure_url;
  })
);
    
    */


    // Convert date string "DD/MM/YYYY" → Date object
    let formattedEventDate = null;
    if (eventDate) {
      const [day, month, year] = eventDate.split('/');
      formattedEventDate = new Date(`${year}-${month}-${day}`);
    }

    const eventData = {
      name,
      price: Number(price),
      category,
      subCategory,
      discriptions,
      bestSeller: bestSeller === "true",
      image: imagesUrl,
      eventDate: formattedEventDate,
    };

    console.log(eventData);

    const event = new eventModel(eventData);
    await event.save();

    res.json({
      success: true,
      message: "Sucess full add Event",
      eventId: event._id
    })


  } catch (error) {
    console.error("Add Event Error:", error);
    res.json({
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