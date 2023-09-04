import {Router} from 'express';
const routesTodos = Router();

import { getTodosById } from '../../controllers/todosController/getTodosById.controller';

routesTodos.get("/getTodoById", getTodosById);

export {routesTodos};