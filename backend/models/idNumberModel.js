import mongoose from "mongoose";

const IdNumberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // optional
    },
    serialNumber: {
        type: Number,
        required: true,
        unique: true, // optional
    }
}, { minimize: false });

const IdNumberModel =
    mongoose.models.IdNumber || mongoose.model("IdNumber", IdNumberSchema);

export default IdNumberModel;
