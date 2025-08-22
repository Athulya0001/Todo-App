import express from 'express'
import { addTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController.js'
import {authMiddleware} from '../middleware/authCheck.js'

const todoRouter = express.Router()

todoRouter.post('/',authMiddleware,addTodo)
todoRouter.get('/',authMiddleware,getTodos)
todoRouter.put("/:id", authMiddleware, updateTodo);
todoRouter.delete("/:id", authMiddleware, deleteTodo);

export default todoRouter