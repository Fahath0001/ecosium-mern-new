import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import patnerModel from "../models/partnerModel.js";


// Create the user Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for Patner Login
// Route for Patner Login
const patnerLogin = async (req, res) => {
    try {
        const { email, password, businessType } = req.body;
        const partner = await patnerModel.findOne({
            email,
            businessType
        });

        if (!partner) {
            return res.json({
                sucess: false,
                message: "Check Your Credencial"
            })
        }
        const isMatch = await bcrypt.compare(password, partner.password);
        if (isMatch) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            const id = partner._id;
            res.json({
                sucess: true,
                token,
                id,
                message: "Sucessfuly Login"
            })
        }
        else {
            res.json({
                sucess: false,
                message: "Please Enter Correct Password"
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            sucess: false,
            message: error.message
        })

    }
}


// Route for Patner Register
// Route for Patner Register
const patnreRegister = async (req, res) => {
    try {
        const { mid, email, password, businessType, patnerStatus } = req.body;

        // checking user already exists or not
        const exists = await patnerModel.findOne({ email });
        if (exists) {
            return res.json({
                sucess: false,
                message: "Patner already Exists",
            })
        }

        // validating email formate & strong password
        if (!validator.isEmail(email)) {
            return res.json({
                sucess: false,
                message: "Please enter a valid email",
            })
        }
        if (password.length < 8) {
            return res.json({
                sucess: false,
                message: "Please enter a Strong Pasword",
            })
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPatner = new patnerModel({
            mid,
            email,
            password: hashedPassword,
            businessType,
            patnerStatus,
        })

        const patner = await newPatner.save();

        // Cearing the token to login exsts
        const id = patner._id;
        const token = createToken(id);

        res.json({
            sucess: true,
            token,
            id,
            message: "Sucessfully Register Done."
        })

    } catch (error) {
        console.log(error);
        res.json({
            sucess: false,
            message: error.message
        })

    }
}






// Route for Patner documents Upolodes
// Route for Patner documents Upolodes
const patnerDoumentsUplodes = async (req, res) => {
    try {
        const id = req.params.id;

        // Parse partnerDetails JSON
        let partnerDetails = {};
        if (req.body.partnerDetails) {
            try {
                partnerDetails = JSON.parse(req.body.partnerDetails);
            } catch (err) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid JSON format for partnerDetails"
                });
            }
        } else {
            return res.status(400).json({
                success: false,
                message: "partnerDetails is required"
            });
        }

        // Handle file uploads
        if (req.files && req.files.length > 0) {
            partnerDetails.mediaFile = req.files.map(file => ({
                mediaUrl: file.path,
                type: file.mimetype,
                videoDuration: null,
            }));
        }

        // Prepare update object
        const updateObj = { partnerDetails };

        // Only update patnerStatus if it exists in the request
        if (req.body.patnerStatus) {
            updateObj.patnerStatus = req.body.patnerStatus;
        }

        // Update in DB
        const updatedPatner = await patnerModel.findByIdAndUpdate(
            id,
            updateObj,
            { new: true }
        );

        if (!updatedPatner) {
            return res.status(404).json({
                success: false,
                message: "Partner not found"
            });
        }

        res.json({
            success: true,
            data: updatedPatner
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Patner Status
// Patner Status
// Patner Status

const findPatnerStatus = async (req, res) => {
    try {
        const patnerId = req.query.id; // ← use query instead of body

        const partner = await patnerModel.findById(patnerId);

        if (partner) {
            return res.json({
                success: true,
                patnerStatus: partner.patnerStatus
            });
        }

        res.json({
            success: false,
            message: "Partner not found"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

// Find Partner
// Find Partner
// Find Partner
const findPatner = async (req, res) => {
    try {
        const patnerId = req.params.id; // ✅ use params

        const partner = await patnerModel.findById(patnerId);

        if (partner) {
            return res.json({
                success: true,
                partner
            });
        }

        res.json({
            success: false,
            message: "Partner not found"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};




const updatePatnerStatus = async (req, res) => {
    try {
        const { id, status } = req.body;

        if (!id || !status) {
            return res.status(400).json({
                success: false,
                message: "id and status are required"
            });
        }

        const updatedPartner = await patnerModel.findByIdAndUpdate(
            id,
            { $set: { patnerStatus: status } }, // only update this field
            { new: true, runValidators: false } // skip other field validations
        );

        if (!updatedPartner) {
            return res.status(404).json({
                success: false,
                message: "Partner not found",
            });
        }

        res.json({
            success: true,
            message: "Partner status updated successfully",
            patnerStatus: updatedPartner.patnerStatus
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Patner Status
// Patner Status
// Patner Status

const ListPatnerStatus = async (req, res) => {
    try {
        const patnerId = req.query.id; // ← use query instead of body

        const partners = await patnerModel.find({});

        if (partners) {
            return res.json({
                success: true,
                partners
            });
        }

        res.json({
            success: false,
            message: "Partner not found"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export { patnerLogin, patnreRegister, patnerDoumentsUplodes, findPatnerStatus, updatePatnerStatus, ListPatnerStatus,findPatner }
