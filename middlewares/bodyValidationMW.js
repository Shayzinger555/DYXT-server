import logger from "../logger.js";
import { verifyToken } from "../token/jwt.js";

import matchCollectionToJOIschema from "../utils/matchCollectionToJOIschema.js";

const bodyValidationMW = async (req, res, next) => {
  const validateSchema = matchCollectionToJOIschema(req.params.collection);
  const { _id } = await verifyToken(req.headers.token);
  const dataWithUserId = { ...req.body, user_id: _id };

  try {
    await validateSchema(dataWithUserId);
    next();
  } catch (err) {
    logger.error(err);
  }
};

export default bodyValidationMW;
