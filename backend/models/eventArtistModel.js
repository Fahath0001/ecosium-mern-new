import mongoose from "mongoose";
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

const eventArtistShema = new mongoose.Schema(
    {
        artistName: {
            type: String,
            required: true
        },
        artistDis: {
            type: String,
            required: true
        },
        events: {
            type: Array,
        },
        followers: {
            type: Number
        },
        media: {
            type: [mediaSchema],

        }
    }
);

const eventArtistModel = mongoose.models.eventArtist || mongoose.model("eventArtist", eventArtistShema);

export default eventArtistModel;