import express, { Router } from "express";
const todosRouter = express.Router();

import {
    getTodos
} from "../models/todos.js"

// Get the todos list
todosRouter.get("/", async (req, res) => {
    const data = await getTodos();
    res.status(200).json({success:true, payload:data});
})

export default todosRouter;