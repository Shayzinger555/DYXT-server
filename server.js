import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import appRouter from "./routes/api.router.js";
import cors from "cors";
import logger from "./logger.js";
import { initialUsers } from "./initialData.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", appRouter);
mongoose
  .connect(process.env.CON_STRING)
  .then(() => {
    logger.info("connected to mongoDB");
  })
  .catch((err) => {
    logger.error(err);
  });

app.listen(process.env.PORT || 3030, () => {
  logger.info(`Server is running on port ${process.env.PORT || 3030}`);
  initialUsers();
});
