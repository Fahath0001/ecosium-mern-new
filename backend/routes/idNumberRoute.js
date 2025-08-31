import express from "express";
import { createSerial, getSerialNumber, updateSerialNumber } from "../controllers/idNumberController.js";

const idNumberRouter = express.Router();

// Create new serial
idNumberRouter.post("/create", createSerial);
idNumberRouter.put("/update", updateSerialNumber);
idNumberRouter.get("/serial", getSerialNumber);


export default idNumberRouter;
