import express from "express";
import { addNewTodo } from "../controllers/addNewTodo.js ";

const route = express.Router();

route.post('/todos',addNewTodo);

export default route;