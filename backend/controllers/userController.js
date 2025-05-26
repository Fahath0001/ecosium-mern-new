import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import userModel from "../models/useModel.js";

// Create the user Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}



//Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({
                sucess: false,
                message: "User is not Available"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id)
            res.json({
                sucess: true,
                token
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

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                sucess: false,
                message: "User already Exists",
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

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        // Cearing the token to login exsts
        const token = createToken(user._id);

        res.json({
            sucess: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            sucess: false,
            message: error.message
        })

    }
}


// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({
                sucess: true,
                message: "Admin Login Sucessfully",
                token
            })
        } else {
            res.json({
                sucess: false,
                message: "Check Your User Name or Pass word"
            })
        }

    } catch (error) {
        res.json({
            sucess: false,
            message: error.message
        })
    }
}

export { loginUser, registerUser, adminLogin };