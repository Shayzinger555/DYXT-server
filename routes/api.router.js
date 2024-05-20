// ? This is the main router which leads to one of the sub endpoints - users and items

import express from "express";
const appRouter = express.Router();
import usersRouter from "./api/users.router.js";
import itemsRouter from "./api/items.router.js";
appRouter.use("/users", usersRouter);
appRouter.use("/", itemsRouter);
export default appRouter;
