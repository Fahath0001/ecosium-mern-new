import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: Number,
    title: String,
}, { _id: false });

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

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: [categorySchema], // array of simplified category objects
        required: true
    },
    discriptions: {
        type: String,
        required: true
    },
    bestSeller: {
        type: Boolean
    },
    media: {
        type: [mediaSchema], // array of simplified category objects
 
    },
    eventDate: {
        type: Date
    }
}, {
    minimize: false,
    // collection: 'eventsList' 
    // // 👈 this sets the MongoDB collection name
});

const eventModel = mongoose.models.event || mongoose.model('event', eventSchema);

export default eventModel;