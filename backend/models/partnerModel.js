import mongoose from "mongoose";


const mediaFileShema = new mongoose.Schema({
    mediaUrl: {
        type: String,
    },
    type: {
        type: String,
    },
    videoDuration: {
        type: Number, // duration in seconds (only for videos)
        default: null,
    },
}, { timestamps: true })




const bisAddrssShema = new mongoose.Schema({
    addressLine: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    }
}, { timestamps: true });


const patnerDetailsShema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    },
    bisPhone: {
        type: Array,
    },
    bisAddress: {
        type: bisAddrssShema,
    },
    mapUrl: {
        type: String,
    },
    mediaFile: {
        type: [mediaFileShema],
    }

}, { timestamps: true });

const patnershema = new mongoose.Schema({
    mid: {
        type: String,
        required: true,
        unique: true, 
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true
    },
    patnerStatus: {
        type: String,
        required: true
    },
    partnerDetails: {
        type: patnerDetailsShema,
    },
}, { minimize: false });


const patnerModel = mongoose.models.partner || mongoose.model('patner', patnershema);

export default patnerModel;