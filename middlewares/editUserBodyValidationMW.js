import logger from "../logger.js";
import editUserSchemaValidation from "../validation/editUserJOI.js";

const editUserValidationMW = async (req, res, next) => {
  try {
    await editUserSchemaValidation(req.body);
    next();
  } catch (err) {
    logger.error(err);
  }
};

export default editUserValidationMW;
