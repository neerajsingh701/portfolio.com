

import User from '../models/user.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // simple validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        // password hashing 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        // now we creating the user if the 
        // user is register it creat a user 
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

// now login function 
export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        // check user exists
        const user = await User.findOne({ email });

        // if user is not present
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        // now comparing password which is present in database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        // now generating token JWT
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}






export const sendData = async (req, res) => {

    try {

        const { name, age } = req.body;

        const newUser = new User({
            name,
            age
        })


        await newUser.save();

        res.json({
            success: true,
            message: "User saved successfully",
            data: newUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }
}



export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); //hide passwords ...

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }
}


// abb update user kay liye ek function banayengay
export const updateUser = async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                // update data return kare...
                new: true,
                runValidators: true
            }

        )
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // jab user found ho tho below code aajaye
        res.json({
            success: true,
            message: "User Updated Successfully",
            data: user
        })




    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }
}


// mongodb ka password
// 4O5rIKqX5Oj6ct88

// url db ka
// mongodb+srv://royneeraj521_db_user:4O5rIKqX5Oj6ct88@cluster0.ndsveul.mongodb.net/?appName=Cluster0
