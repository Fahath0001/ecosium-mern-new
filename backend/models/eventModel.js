import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: Number,
    title: String,
}, { _id: false });

const seatsSchema = new mongoose.Schema({
    seatNumber: { type: Number, required: true },
    isBooked: { type: Boolean, required: true }
}, { timestamps: true });

const ticketSeatSchema = new mongoose.Schema({
    seat: {
        type: seatsSchema
    },
    numberOfSeats: Number,
    ticketPrice: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const ticketSchema = new mongoose.Schema({
    ticketDate: {
        type: String,
        required: true
    },
    startingTime: {
        type: String,
        required: true,
        match: /^([0-1]\d|2[0-3]):([0-5]\d)$/
    },
    endingTime: {
        type: String,
        required: true,
        match: /^([0-1]\d|2[0-3]):([0-5]\d)$/
    },
    seats: {
        type: [ticketSeatSchema],
        required: true
    }
}, { timestamps: true });

const mediaSchema = new mongoose.Schema({
    mediaUrl: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true, // 'image' or 'video'
    },
    videoDuration: {
        type: Number,
        default: null,
    }
}, { timestamps: true });

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tickets: {
        type: [ticketSchema],
        required: true
    },
    category: {
        type: [categorySchema],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    moreInfo: {
        type: String,
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    media: {
        type: [mediaSchema]
    }
}, {
    minimize: false
});

const eventModel = mongoose.models.event || mongoose.model('event', eventSchema);

export default eventModel;
