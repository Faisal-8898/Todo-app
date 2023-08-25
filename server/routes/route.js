import express from "express";
import { addNewTodo , getAllTodos} from "../controllers/todo-controllers.js";

const route = express.Router();

route.post('/todos',addNewTodo);
route.get('/todos',getAllTodos);

export default route;