import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config();
const app = express();

app.use(express.json());

// connecting the database
connectDB();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://neerajportfolioo.netlify.app"
    ],
    credentials: true
}));


// midddleware (important for POST)

// contact page ka form connection
app.use("/api", messageRoutes)

// routes connect karna
app.use('/api/users', userRoutes)



app.get("/", (req, res) => {
    res.send("Backend is working properly")
})

// post route
// app.post("/data", (req, res) => {
//     console.log("Data received", req.body);

//     res.json({
//         success:true,
//         message:"Data received successfully"
//     })

// })
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})






