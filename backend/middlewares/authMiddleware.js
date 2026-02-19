


import jwt from "jsonwebtoken";
import User from "../models/user.js"

export const protect = async (req, res, next) => {

    let token;

    // check headers for token

    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {

            token = req.headers.authorization.split(" ")[1];

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // attaced user to request
            req.user = await User.findById(decoded.id).select("-password");
            next();   // this next allow access...


        } catch (error) {
            res.status(401).json({
                success: false,
                message: "No token, authorization denied"
            })

        }
    }


}