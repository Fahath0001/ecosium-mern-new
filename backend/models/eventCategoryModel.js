import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    mediaUrl: { type: String, required: true },
    type: { type: String, required: true }, // 'image' or 'video'
    videoDuration: { type: Number, default: null }
}, { timestamps: true });

const eventCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    heroMedia: {
        type: [mediaSchema],
        required: true
    }
}, {
    timestamps: true,
    collection: 'eventcategory' // Forces proper name
});

// Use singular model name to avoid double pluralization
const eventCategoryModel = mongoose.models.EventCategory || mongoose.model("EventCategory", eventCategorySchema);

export default eventCategoryModel;
