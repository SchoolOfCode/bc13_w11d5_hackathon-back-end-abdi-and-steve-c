import express, { Router } from "express";
const todosRouter = express.Router();

import {
    getTodos,
    postTodo
} from "../models/todos.js"

// Get the todos list
todosRouter.get("/", async (req, res) => {
    const data = await getTodos();
    res.status(200).json({success:true, payload:data});
})

// Post a todo
todosRouter.post("/", async (req, res) => {
    const newTodo = req.body;
    const result = await postTodo(newTodo);
    res.status(201).json({success:true, payload:result});
})


export default todosRouter;