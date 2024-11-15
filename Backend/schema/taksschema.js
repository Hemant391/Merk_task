import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadlineDate: {
        type: Date,
        required: true,
    },
    file: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        default: "TODO",
        enum: ["DONE", "TODO"],  
    },
    action: {
        type: String,
        default: "In Progress",
        enum: ["Achieved", "In Progress", "Failed"], 
    },
});

export const Task = mongoose.model("Task", taskSchema);
