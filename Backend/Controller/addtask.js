import { Task } from "../schema/taksschema.js";



export const addTask = async (req, res) => {
    
    const { title, description, deadlineDate, file } = req.body;
    
    
    if (!title || !description || !deadlineDate) {
        res.status(400).send("Please provide all details");
        return;  
    }

    try {
        const task = await Task.create({ title, description, deadlineDate, file });
        console.log(task)
        if (!task) {
            res.status(501).send(new Error("Internal error"));
            return;
        }
        
        res.status(200).send({
            success: true,
            message: "Task added successfully",
        });
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export const getTask = async (req, res) => {
    const task=await Task.find();
    res.status(201).json({
        success:true,
        task
    })
}