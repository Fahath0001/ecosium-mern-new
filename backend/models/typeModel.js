import mongoose, { Mongoose } from "mongoose";

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

const typeShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    heroMedia: {
        type: [mediaFileShema]
    },
    isPartner: {
        type: Boolean,
        
    },
      isFrontEnd: {
        type: Boolean,
    }
});

const typeModel = mongoose.model.type || mongoose.model("type", typeShema);

export default typeModel;

