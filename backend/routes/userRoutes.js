

import express from 'express'
import { sendData, getUsers, updateUser, registerUser, loginUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router();

router.get("/", getUsers)
router.post("/data", sendData)
router.put("/users/:id", updateUser);

// this route is for the register and login
router.post("/register", registerUser)
router.post("/login", loginUser)

// protected route
router.get("/", protect, getUsers)



export default router;
