import mongoose from "mongoose";

const patnershema = new mongoose.Schema({
    name: {
        type: String,
        requred: true,
    },
    email: {
        type: String,
        requred: true,
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
        teype: Array,
    }
}, { minimize: false });

const patnerModel = mongoose.models.partner || mongoose.model('patner', patnershema);

export default patnerModel;