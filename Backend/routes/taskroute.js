import express from 'express';
import { addTask, getTask } from '../Controller/addtask.js';


const router=express.Router();



router.post('/addtask',addTask);
router.get("/getalltask",getTask);


export default router;