import { request } from "express";
import idNumberModel from "../models/idNumberModel.js";


// Create Heading Serial Number
// Create Heading Serial Number

const createSerial = async (req, res) => {
    try {
        const { name, serialNumber } = req.body;

        const serialData = { name, serialNumber };

        const serial = new idNumberModel(serialData);
        await serial.save();

        res.json({
            success: true,
            message: "Successfully added Serial",
            data: serial,
        });
    } catch (error) {
        console.error("Add Serial Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};


// Get Serial Number
// Get Serial Number

const getSerialNumber = async (req, res) => {
    try {
        const { name } = req.query; // <-- use req.query instead of req.body
        const serialData = await idNumberModel.findOne({ name });

        if (!serialData) {
            return res.json({ success: false, message: "Not found" });
        }

        return res.json({ success: true, serialNumber: serialData.serialNumber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// update the Serial Number
// update the Serial Number
// update the Serial Number

const updateSerialNumber = async (req, res) => {
    try {
        const { name, getNumber } = req.body;

        const updateserialNumber = await idNumberModel.findOneAndUpdate(
            { name }, // ✅ find by name field
            { $set: { serialNumber: getNumber} },
            { new: true, runValidators: false }
        );

        if (!updateserialNumber) {
            return res.json({
                success: false,
                message: "Serial isn't Available",
            });
        }

        res.json({
            success: true,
            message: "Created MID",
            serialNumber: updateserialNumber.serialNumber
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message,
        });
    }
};


export { createSerial, getSerialNumber,updateSerialNumber };
