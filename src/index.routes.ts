import { Router } from "express";
import { routesSignUp } from "./routes/signUp/signUp.routes";
import { routesSignIn } from "./routes/signIn/signIn.routes";
import { routesTodos } from "./routes/todos/todos.routes";


const routes = Router();

routes.use(routesSignUp);
routes.use(routesSignIn);
routes.use('/todos', routesTodos);

export {routes};