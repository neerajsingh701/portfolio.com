

import express from 'express'
import Message from '../models/Message.js'


const router = express.Router()

// post message

router.post("/contact", async (req, res) => {
    try {

        const { name, email, message } = req.body;

        const newMessage = await Message.create({
            name,
            email,
            message,
        })

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        })




    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })

    }
})

export default router