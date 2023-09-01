import { Router } from "express";
import { routesSignUp } from "./routes/signUp/signUp.routes";
import { routesSignIn } from "./routes/signIn/signIn.routes";

const routes = Router();

routes.use(routesSignUp);
routes.use(routesSignIn);

export {routes};