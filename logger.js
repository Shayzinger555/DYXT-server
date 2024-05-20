import pino from "pino";

//? This code sets the server Pino Logger
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM",
      ignore: "pid,hostname",
    },
  },
});
export default logger;
