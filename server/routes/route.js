import express from "express";
import { addNewTodo , getAllTodos, toggleTodoDone ,updateTodoo ,deleteTodo} from "../controllers/todo-controllers.js";


const route = express.Router();

route.post('/todos',addNewTodo);
route.get('/todos',getAllTodos);
route.get('/todos/:id', toggleTodoDone)
route.put('/todos/:id',updateTodoo)
route.delete('/todos/:id', deleteTodo)

export default route;