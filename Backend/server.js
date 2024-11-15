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

app.use("/task", taskroutes);

app.get('/', (req, res) => {
    res.send("Hello");
});

// MongoDB Connection
mongoose.connect('mongodb+srv://Hemantpanwar399:Hemant1@@todo.kcqul.mongodb.net/?retryWrites=true&w=majority&appName=todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));  // Corrected closing parenthesis


// Start Server
app.listen(4000, () => console.log("Server listening on port 4000"));
