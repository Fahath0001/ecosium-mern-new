import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const {
            token,
            email,
            password
        } = req.headers;
        if (!token) {
            return res.json({
                sucess: false,
                message: "Not Authorized Login Token"
            })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== email + password) {
            return res.json({
                sucess: false,
                message: "This Admin is Not Authorized"
            })
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({
            sucess: false,
            message: error.message,
        })

    }
}

export default adminAuth;