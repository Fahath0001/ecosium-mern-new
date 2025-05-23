import mongoose from "mongoose";

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
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    discriptions: {
        type: Array,
        required: true,
    },
    bestSeller: {
        type: Boolean,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    }
}, {
    minimize: false,
    // collection: 'eventsList' 
    // // 👈 this sets the MongoDB collection name
});

const eventModel = mongoose.models.event || mongoose.model('event', eventSchema);

export default eventModel;