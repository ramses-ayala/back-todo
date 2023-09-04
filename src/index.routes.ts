import { Router } from "express";
import { routesSignUp } from "./routes/signUp/signUp.routes";
import { routesSignIn } from "./routes/signIn/signIn.routes";
import { routesTodos } from "./routes/todos/todos.routes";
import { tokenValidator } from "./utils/tokenValidator";

const routes = Router();

routes.use(routesSignUp);
routes.use(routesSignIn);
routes.use('/todos', tokenValidator, routesTodos);

export {routes};