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
            const token = createToken(partner._id)
            res.json({
                sucess: true,
                token,
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
        const { name, email, password, businessType, patnerStatus } = req.body;

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
            name,
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

export { patnerLogin, patnreRegister }
