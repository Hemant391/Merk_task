import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import taskroutes from './routes/taskroute.js';
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/task", taskroutes);

app.get('/', (req, res) => {
    res.send("Hello");
});

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start Server
app.listen(4000, () => console.log("Server listening on port 4000"));
