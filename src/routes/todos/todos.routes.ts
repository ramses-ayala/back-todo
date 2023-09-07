import {Router} from 'express';
const routesTodos = Router();

import { tokenValidator } from '../../utils/tokenValidator';

import { getTodosById } from '../../controllers/todosController/getTodosById.controller';

routesTodos.get("/getTodoById", tokenValidator ,getTodosById);

export {routesTodos};