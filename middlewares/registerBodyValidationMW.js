import logger from "../logger.js";
import registerSchemaValidation from "../validation/registerJOI.js";

const registerValidationMW = async (req, res, next) => {
  try {
    await registerSchemaValidation(req.body);
    next();
  } catch (err) {
    logger.error(err);
  }
};

export default registerValidationMW;
