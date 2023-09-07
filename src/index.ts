import express from "express";
import morgan from "morgan";

const app = express();

import { routes } from "./index.routes";

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api",routes);

app.listen(app.get("port"), () => {
    console.log("Server on port : ", app.get("port"));
});